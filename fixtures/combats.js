module.exports = async ({ Combat, Quest, Creature, CombatEnemy }) => {
  const combatData = [
    {
      questId: 1,
      enemies: [{ name: "Rat Géant", quantity: 3 }],
    },
    {
      questId: 2,
      enemies: [{ name: "Gobelin lourd", quantity: 3 }],
    },
    {
      questId: 3,
      enemies: [{ name: "Minotaure", quantity: 1 }],
    },
    {
      questId: 4,
      enemies: [{ name: "Dragon Vert", quantity: 1 }],
    },
  ];

  for (const combatEntry of combatData) {
    const quest = await Quest.findByPk(combatEntry.questId);

    if (!quest) {
      console.warn(
        `⚠️  Quest ${combatEntry.questId} introuvable, combat ignoré.`
      );
      continue;
    }

    const combat = await Combat.create({ questId: quest.id });

    for (const { name, quantity } of combatEntry.enemies) {
      const creature = await Creature.findOne({ where: { name } });

      if (!creature) {
        console.warn(`⚠️  Creature ${name} introuvable`);
        continue;
      }

      await CombatEnemy.create({
        combatId: combat.id,
        creatureId: creature.id,
        quantity,
      });

      console.log(
        `✅ Combat lié à quête ${quest.id} avec ${quantity}x ${name}`
      );
    }
  }
};
