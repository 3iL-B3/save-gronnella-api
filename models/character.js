const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Character = sequelize.define(
    "Character",
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
      class: {
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
      fortune: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "characters",
      timestamps: false,
    }
  );

  return Character;
};
