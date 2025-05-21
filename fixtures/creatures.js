module.exports = async ({ Creature }) => {
  const data = [
    {
      name: "Rat Géant",
      picture: "rat-geant.png",
      healthMax: 50,
      manaMax: 0,
      damage: 15,
      defense: 10,
    },
    {
      name: "Gobelin lourd",
      picture: "gobelin-lourd.png",
      healthMax: 75,
      manaMax: 0,
      damage: 20,
      defense: 15,
    },
    {
      name: "Minotaure",
      picture: "minotaure.png",
      healthMax: 120,
      manaMax: 0,
      damage: 30,
      defense: 20,
    },
    {
      name: "Dragon Vert",
      picture: "dragon-vert.png",
      healthMax: 150,
      manaMax: 200,
      damage: 40,
      defense: 30,
    },
  ];

  for (const creat of data) {
    await Creature.findOrCreate({
      where: { name: creat.name },
      defaults: creat,
    });
  }
};
