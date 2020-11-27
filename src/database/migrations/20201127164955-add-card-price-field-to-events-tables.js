'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'events',
      'card_price',
      {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('events', 'card_price');
  }
};
