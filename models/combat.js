const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Combat = sequelize.define(
    "Combat",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      questId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "quests",
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
    },
    {
      tableName: "combats",
      timestamps: false,
    }
  );

  return Combat;
};
