'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preco_venda: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_expiracao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_modificacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      situacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      razao_social: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone_celular: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefone_principal: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
