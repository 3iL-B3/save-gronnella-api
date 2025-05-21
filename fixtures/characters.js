module.exports = async ({ Character }) => {
  const data = [
    {
      name: "Bravhilde Briseflamme",
      class: "Guerrière Humaine",
      picture: "bravhilde-briseflamme.png",
      healthMax: 180,
      manaMax: 0,
      damage: 18,
      defense: 30,
      fortuneBase: 75,
    },
    {
      name: "Archibald Fumebarbe",
      class: "Magicien Humain",
      picture: "archibald-fumebarbe.png",
      healthMax: 100,
      manaMax: 200,
      damage: 8,
      defense: 8,
      fortuneBase: 200,
    },
    {
      name: "Lunéria Pluie-d’Argent",
      class: "Rôdeuse Elfe",
      picture: "luneria-pluie-dargent.png",
      healthMax: 140,
      manaMax: 100,
      damage: 16,
      defense: 18,
      fortuneBase: 150,
    },
    {
      name: "Snargle Fignetteur",
      class: "Voleur Gnome",
      picture: "snargle-fignetteur.png",
      healthMax: 160,
      manaMax: 80,
      damage: 14,
      defense: 20,
      fortuneBase: 250,
    },
  ];

  for (const char of data) {
    await Character.findOrCreate({
      where: { name: char.name },
      defaults: char,
    });
  }
};
