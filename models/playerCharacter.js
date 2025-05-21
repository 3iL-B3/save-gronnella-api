const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const PlayerCharacter = sequelize.define(
    "PlayerCharacter",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      characterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mana: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fortune: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "player_characters",
      timestamps: false,
    }
  );

  return PlayerCharacter;
};
