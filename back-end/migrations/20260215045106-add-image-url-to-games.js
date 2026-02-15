module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Games", "imageUrl", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Games", "imageUrl");
  },
};
