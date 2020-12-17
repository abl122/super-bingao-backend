import Sequelize, { Model } from 'sequelize';

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        edition: Sequelize.STRING,
        name: Sequelize.STRING,
        initial_lot: Sequelize.INTEGER,
        initial_card: Sequelize.INTEGER,
        event_beginning: Sequelize.STRING,
        is_active: Sequelize.BOOLEAN,
        card_price: Sequelize.FLOAT,
        comission: Sequelize.FLOAT,
      },
      {
        sequelize,
        tableName: 'events',
      }
    );

    return this;
  }
}

export default Event;
