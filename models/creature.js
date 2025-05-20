const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Creature = sequelize.define(
    "Creature",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      healthMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      manaMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      damage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "creatures",
      timestamps: false,
    }
  );

  return Creature;
};
