'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'events',
      'comission',
      {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'comission');
  }
};
