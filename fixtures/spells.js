module.exports = async ({ Spell }) => {
  const data = [
    {
      name: "Boule de Feu",
      target: "enemy",
      effect: "damage",
      amount: 30,
      mana_cost: 20,
    },
    {
      name: "Flèche foudroyante",
      target: "enemy",
      effect: "damage",
      amount: 25,
      mana_cost: 15,
    },
    {
      name: "Poison vicieux",
      target: "enemy",
      effect: "damage",
      amount: 15,
      mana_cost: 10,
    },
    {
      name: "Souffle Acide",
      effect: "damage",
      target: "enemy",
      amount: 40,
      mana_cost: 25,
    },
  ];

  for (const spell of data) {
    await Spell.findOrCreate({
      where: { name: spell.name },
      defaults: spell,
    });
  }
};
