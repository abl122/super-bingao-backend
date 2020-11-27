import Validated from '../models/Validated';

class OrderController {
  async index(req, res) {
    const { edition } = req.query;

    const orders = await Validated.findAll({
      where: {
        edition: edition,
      },
      order: [['created_at', 'DESC']],
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
