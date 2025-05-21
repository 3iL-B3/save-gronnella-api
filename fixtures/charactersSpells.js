module.exports = async ({ Character, Spell }) => {
  const assignments = [
    {
      characterName: "Archibald Fumebarbe",
      spellName: "Boule de Feu",
    },
    {
      characterName: "Lunéria Pluie-d’Argent",
      spellName: "Flèche foudroyante",
    },
    {
      characterName: "Snargle Fignetteur",
      spellName: "Poison vicieux",
    },
  ];

  for (const { characterName, spellName } of assignments) {
    const character = await Character.findOne({
      where: { name: characterName },
    });
    const spell = await Spell.findOne({ where: { name: spellName } });

    if (character && spell) {
      await character.addSpell(spell);
      console.log(`✅ ${characterName} → ${spellName}`);
    } else {
      console.warn(`⚠️  Relation non créée : ${characterName} → ${spellName}`);
    }
  }
};
