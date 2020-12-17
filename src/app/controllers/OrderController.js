import Validated from '../models/Validated';
import Event from '../models/Event';

class OrderController {
  async index(req, res) {
    const { event_id } = req.query;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ message: 'No events found' });
    }

    const orders = await Validated.findAll({
      where: {
        edition: event.edition,
      },
    });

    // Armazena todos os números de pedidos em um array
    var oder_number_arr = [];
    orders.map(order => {
      oder_number_arr.push(order.pedido);
    });

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    // Obtem de forma única os números de pedidos
    var order_indexes = oder_number_arr.filter(onlyUnique); // [100,101]

    var response_obj = {};

    // Cria um array com os números de pedidos em order_indexes
    order_indexes.forEach(order_number => {
      var current_order_number_array = [];

      orders.forEach(item => {
        if (item.pedido === order_number) {
          current_order_number_array.push(item);
        }
      });

      response_obj[order_number] = current_order_number_array;
    });

    return res.json(response_obj);
  }
}

export default new OrderController();
