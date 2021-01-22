import axios from 'axios';
import { Op } from 'sequelize';

import Validated from '../models/Validated';
import Event from '../models/Event';
import Order from '../models/Order';

class OrderController {
  async index(req, res) {
    const { event_id } = req.query;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ message: 'No events found' });
    }

    const isPaid = 4;
    const isDelivered = 14;

    const orders = await Order.findAll({
      where: {
        sku: event.edition,
        id_situacao: {
          [Op.or]: [isPaid, isDelivered],
        },
      },
      order: [['data_criacao', 'DESC']],
    });

    var response_array = [];
    for (const [, order] of orders.entries()) {
      const { numero_pedido } = order.dataValues;

      const cards = await Validated.findAll({
        where: {
          pedido: numero_pedido,
        },
      });

      response_array.push({
        cards: cards,
        ...order.dataValues,
      });
    }

    return res.json(response_array);
  }

  async update(req, res) {
    const { order_number } = req.body;

    const chave_aplicacao = 'bac71631-6746-4fec-a391-79426b0568d5';
    const chave_api = 'fdef8cea32652c3484c7';

    await axios.put(`https://api.awsli.com.br/v1/situacao/pedido/${order_number}?chave_aplicacao=${chave_aplicacao}&chave_api=${chave_api}`, {
      codigo: 'pedido_entregue'
    });

    const response = await axios.get(`https://api.awsli.com.br/v1/pedido/${order_number}?chave_aplicacao=${chave_aplicacao}&chave_api=${chave_api}`);

    const order = await Order.findOne({
      where: {
        numero_pedido: order_number,
      },
    });

    order.situacao = response.data.situacao.codigo;
    order.id_situacao = response.data.situacao.id;
    order.data_modificacao = response.data.data_modificacao;
    await order.save();

    return res.json({ ok: true })
  }
}

export default new OrderController();
