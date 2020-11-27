import Sequelize, { Model } from 'sequelize';

class Validated extends Model {
  static init(sequelize) {
    super.init(
      {
        lote: Sequelize.INTEGER,
        lancamento: Sequelize.INTEGER,
        n1: Sequelize.STRING,
        n2: Sequelize.STRING,
        n3: Sequelize.STRING,
        n4: Sequelize.STRING,
        n5: Sequelize.STRING,
        n6: Sequelize.STRING,
        n7: Sequelize.STRING,
        n8: Sequelize.STRING,
        n9: Sequelize.STRING,
        n10: Sequelize.STRING,
        n11: Sequelize.STRING,
        n12: Sequelize.STRING,
        n13: Sequelize.STRING,
        n14: Sequelize.STRING,
        n15: Sequelize.STRING,
        codigo: Sequelize.STRING,
        pedido: Sequelize.STRING,
        comprador: Sequelize.STRING,
        telefone: Sequelize.STRING,
        vendedor: Sequelize.STRING,
        edition: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'validateds',
      }
    );

    return this;
  }
}

export default Validated;
