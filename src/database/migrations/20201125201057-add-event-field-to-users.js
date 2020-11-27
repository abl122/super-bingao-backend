'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'event_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'event_id');
  }
};
