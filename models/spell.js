const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Spell = sequelize.define(
    "Spell",
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
      target: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      effect: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mana_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "spells",
      timestamps: false,
    }
  );

  return Spell;
};
