import Validated from '../models/Validated';
import Event from '../models/Event';
import Card from '../models/Card';

class ValidatedCardController {
  async store(req, res) {

    // Verifica se a pedido já foi validada
    const isValidated = await Validated.findAll({
      where: {
        pedido: req.body.order_number,
      },
    });

    if (isValidated.length > 0) {
      return res.status(400).json({ message: 'Order number already validated' });
    }


    // Verifica se já foram vendidas cartelas para este evento
    const validated_count = await Validated.count({
      where: {
        edition: req.query.edition,
      }
    });

    // Recupera a cartela inicial de lançamento
    const { initial_card, initial_lot } = await Event.findOne({
      where: {
        edition: req.query.edition
      },
    });

    const current_card = initial_card + validated_count;

    let response_array = [];

    for (let i = 0; i < req.body.amount; i++) {
      const card = await Card.findOne({
        where: {
          numero: current_card + i,
        },
        attributes: ['numero', 'digito', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n12', 'n13', 'n14', 'n15', 'codigo'],
      });

      const updated_count = validated_count + i;

      const current_lot = Math.floor(updated_count / 100) + initial_lot;
      const current_lan = updated_count >= 100
        ? (validated_count - Math.floor(updated_count / 100) * 100) + 1
        : validated_count + 1;

      response_array.push({
        lote: current_lot,
        lancamento: current_lan + i,
        edition: req.query.edition,
        ...card.dataValues,
        pedido: req.body.order_number,
        comprador: req.body.buyer_name,
        telefone: req.body.cellphone,
        vendedor: 'Lojinha Paroquial',
      });

      await Validated.create({
        lote: current_lot,
        lancamento: current_lan + i,
        edition: req.query.edition,
        ...card.dataValues,
        pedido: req.body.order_number,
        comprador: req.body.buyer_name,
        telefone: req.body.cellphone,
        vendedor: 'Lojinha Paroquial',
      });
    }

    return res.json(response_array);
  }
}

export default new ValidatedCardController();
