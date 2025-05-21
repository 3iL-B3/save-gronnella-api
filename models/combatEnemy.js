const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CombatEnemy = sequelize.define(
    "CombatEnemy",
    {
      combatId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      creatureId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
    },
    {
      tableName: "combat_ennemies",
      timestamps: false,
    }
  );

  return CombatEnemy;
};
