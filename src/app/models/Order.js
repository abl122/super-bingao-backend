import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        id_produto: Sequelize.INTEGER,
        numero_pedido: Sequelize.INTEGER,
        quantidade: Sequelize.INTEGER,
        preco_venda: Sequelize.FLOAT,
        sku: Sequelize.STRING,
        data_criacao: Sequelize.DATE,
        data_expiracao: Sequelize.DATE,
        data_modificacao: Sequelize.DATE,
        situacao: Sequelize.STRING,
        id_situacao: Sequelize.INTEGER,
        valor_total: Sequelize.FLOAT,
        email: Sequelize.STRING,
        nome: Sequelize.STRING,
        razao_social: Sequelize.STRING,
        telefone_celular: Sequelize.STRING,
        telefone_principal: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'orders',
      }
    );

    return this;
  }
}

export default Order;
