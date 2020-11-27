'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cards', {
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      digito: {
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
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cards');
  }
};
