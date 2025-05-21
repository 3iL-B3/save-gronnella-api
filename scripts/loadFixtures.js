const path = require("path");
const {
  sequelize,
  Character,
  Creature,
  Potion,
  Quest,
  Spell,
  Combat,
  CombatEnemy,
} = require("../models");

const load = async () => {
  await sequelize.sync();

  const context = {
    Character,
    Creature,
    Potion,
    Quest,
    Spell,
    Combat,
    CombatEnemy,
  };

  const fixtureFiles = [
    "characters.js",
    "creatures.js",
    "potions.js",
    "quests.js",
    "spells.js",
    "combats.js",
    "charactersSpells.js",
    "creaturesSpells.js",
  ];

  for (const file of fixtureFiles) {
    const fixturePath = path.join(__dirname, "../fixtures", file);
    const applyFixtures = require(fixturePath);
    console.log(`🚀 Chargement de ${file}`);
    await applyFixtures(context);
  }

  console.log("✅ Tous les fixtures ont été chargés.");
};

load()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Erreur pendant le chargement des fixtures :", err);
    process.exit(1);
  });
