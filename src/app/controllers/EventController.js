import axios from 'axios';

import Event from '../models/Event';
import Validated from '../models/Validated';

class EventController {
  async index(req, res) {
    const events = await Event.findAll();

    if (!events) {
      return res.json([]);
    }

    return res.json(events);
  }

  async store(req, res) {
    const {
      edition,
      name,
      initial_lot,
      initial_card,
      event_beginning,
      card_price
    } = req.body;

    const event = await Event.create({
      edition,
      name,
      initial_lot,
      initial_card,
      event_beginning,
      is_active: true,
      card_price,
    });

    return res.json(event);
  }

  async show(req, res) {
    const { event_id } = req.query;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ message: 'No events found' });
    }

    const selled_amount = await Validated.count({
      where: {
        edition: event.edition,
      },
    });

    const chave_aplicacao = 'bac71631-6746-4fec-a391-79426b0568d5';
    const chave_api = 'fdef8cea32652c3484c7';

    const response = await axios.get(`https://api.awsli.com.br/v1/produto?chave_aplicacao=${chave_aplicacao}&chave_api=${chave_api}`);

    // Implementação para recuperação do produc_id e product_status
    var product_id = null;
    var product_status = null;
    response.data.objects.map(product => {
      if (product.sku === event.edition) {
        product_id = product.id;
        product_status = product.ativo;
      }
    });

    // Implementação para recuperação da primeira e da última cartela vendida
    const first_card = await Validated.findOne({
      where: {
        edition: event.edition,
      },
      order: [['createdAt', 'ASC']],
    });

    const last_card = await Validated.findOne({
      where: {
        edition: event.edition,
      },
      order: [['createdAt', 'DESC']],
    });

    return res.json({
      ...event.dataValues,
      selled_amount: selled_amount,
      product_id,
      product_status,
      first_selled_card: first_card.dataValues.codigo,
      last_selled_card: last_card.dataValues.codigo,
    });
  }
}

export default new EventController();
