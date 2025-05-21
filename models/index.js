const { Sequelize } = require("sequelize");
const CharacterModel = require("./character");
const CreatureModel = require("./creature");
const PotionModel = require("./potion");
const QuestModel = require("./quest");
const SpellModel = require("./spell");
const CombatModel = require("./combat");
const CombatEnemyModel = require("./combatEnemy");
const PlayerCharacterModel = require("./playerCharacter");
const UserModel = require("./user");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

const Character = CharacterModel(sequelize);
const Creature = CreatureModel(sequelize);
const Potion = PotionModel(sequelize);
const Quest = QuestModel(sequelize);
const Spell = SpellModel(sequelize);
const Combat = CombatModel(sequelize);
const CombatEnemy = CombatEnemyModel(sequelize);
const PlayerCharacter = PlayerCharacterModel(sequelize);
const User = UserModel(sequelize);

Character.belongsToMany(Spell, {
  through: "character_spells",
  timestamps: false,
});
Spell.belongsToMany(Character, {
  through: "character_spells",
  timestamps: false,
});

Creature.belongsToMany(Spell, {
  through: "creature_spells",
  timestamps: false,
});
Spell.belongsToMany(Creature, {
  through: "creature_spells",
  timestamps: false,
});

Combat.belongsTo(Quest, {
  foreignKey: "questId",
  as: "quest",
});

Combat.belongsToMany(Creature, {
  through: CombatEnemy,
  as: "ennemies",
  foreignKey: "combatId",
  otherKey: "creatureId",
  timestamps: false,
});
Creature.belongsToMany(Combat, {
  through: CombatEnemy,
  as: "combats",
  foreignKey: "creatureId",
  otherKey: "combatId",
  timestamps: false,
});

PlayerCharacter.belongsTo(Character, { foreignKey: "characterId" });

const db = {
  sequelize,
  Sequelize,
  Character,
  Creature,
  Potion,
  Quest,
  Spell,
  Combat,
  CombatEnemy,
  PlayerCharacter,
  User,
};

module.exports = db;
