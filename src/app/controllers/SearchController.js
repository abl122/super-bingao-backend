import { Op } from 'sequelize';

import Validated from '../models/Validated';
import Event from '../models/Event';

class SearchController {
  async index(req, res) {
    const { search_term, event_id } = req.query;

    const event = await Event.findByPk(event_id);

    if (!event) {
      return res.status(400).json({ message: 'No events found' });
    }

    const orders_by_buyer = await Validated.findAll({
      where: {
        edition: event.edition,
        comprador: {
          [Op.like]: `%${search_term}%`,
        },
      },
      order: [['createdAt', 'DESC']],
    });

    if (orders_by_buyer.length > 0) {
      // Armazena todos os números de pedidos em um array
      var oder_number_arr = [];
      orders_by_buyer.map(order => {
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

        orders_by_buyer.forEach(item => {
          if (item.pedido === order_number) {
            current_order_number_array.push(item);
          }
        });

        response_obj[order_number] = current_order_number_array;
      });

      return res.json(response_obj);
    }

    const orders_by_order_number = await Validated.findAll({
      where: {
        edition: event.edition,
        pedido: parseInt(search_term),
      },
      order: [['createdAt', 'DESC']],
    });

    if (orders_by_order_number.length > 0) {
      // Armazena todos os números de pedidos em um array
      var oder_number_arr = [];
      orders_by_order_number.map(order => {
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

        orders_by_order_number.forEach(item => {
          if (item.pedido === order_number) {
            current_order_number_array.push(item);
          }
        });

        response_obj[order_number] = current_order_number_array;
      });

      return res.json(response_obj);
    }

    return res.status(400).json({ message: 'No results' });
  }
}

export default new SearchController();
