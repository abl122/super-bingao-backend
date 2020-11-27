'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('validateds', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lote: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lancamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      edition: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n5: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n6: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n7: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n8: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n9: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n10: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n11: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n12: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n13: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n14: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n15: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pedido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comprador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vendedor: {
        type: Sequelize.STRING,
        allowNull: false,
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

  down: async (queryInterface) => {
    await queryInterface.dropTable('validateds');
  }
};
