const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Quest = sequelize.define(
    "Item",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      objective: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      clue: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reward: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      tableName: "quests",
      timestamps: false,
    }
  );

  return Quest;
};
