module.exports = async ({ Creature, Spell }) => {
  const assignments = [
    {
      creatureName: "Dragon Vert",
      spellName: "Souffle Acide",
    },
  ];

  for (const { creatureName, spellName } of assignments) {
    const creature = await Creature.findOne({
      where: { name: creatureName },
    });
    const spell = await Spell.findOne({ where: { name: spellName } });

    if (creature && spell) {
      await creature.addSpell(spell);
      console.log(`✅ ${creatureName} → ${spellName}`);
    } else {
      console.warn(`⚠️  Relation non créée : ${creatureName} → ${spellName}`);
    }
  }
};
