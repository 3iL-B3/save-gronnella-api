const { Sequelize } = require("sequelize");
const CharacterModel = require("./character");
const CreatureModel = require("./creature");
const ItemModel = require("./item");
const QuestModel = require("./quest");
const SpellModel = require("./spell");
const UserModel = require("./user");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

const Character = CharacterModel(sequelize);
const Creature = CreatureModel(sequelize);
const Item = ItemModel(sequelize);
const Quest = QuestModel(sequelize);
const Spell = SpellModel(sequelize);
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

const db = {
  sequelize,
  Sequelize,
  Character,
  Creature,
  Item,
  Quest,
  Spell,
  User,
};

module.exports = db;
