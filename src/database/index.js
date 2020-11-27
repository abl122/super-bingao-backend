import Sequelize from 'sequelize';

import User from '../app/models/User';
import Event from '../app/models/Event';
import Card from '../app/models/Card';
import Validated from '../app/models/Validated';

import databaseConfig from '../config/database';

const models = [User, Event, Card, Validated];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
