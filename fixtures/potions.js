module.exports = async ({ Potion }) => {
  const data = [
    {
      name: "Potion de santé",
      picture: "potion-de-sante.png",
      target: "health",
      amount: 30,
      price: 15,
    },
    {
      name: "Potion de magie",
      picture: "potion-de-magie.png",
      target: "mana",
      amount: 30,
      price: 15,
    },
  ];

  for (const potion of data) {
    await Potion.findOrCreate({
      where: { name: potion.name },
      defaults: potion,
    });
  }
};
