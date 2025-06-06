module.exports = async ({ Quest }) => {
  const data = [
    {
      title: "Au début",
      description:
        "Un matin, la Princesse Gronnella a décidé d’aller se promener dans les égouts du château. Pourquoi&nbsp;? Personne ne sait. Certains pensent qu’elle cherchait une grenouille à embrasser, d’autres qu’elle fuyait un bal avec le Comte de Plouc-sur-Mer. Toujours est-il qu'elle n'est jamais revenue… Et maintenant, les rats ont doublé le volume de leur musique bizarre et bruyante, ils parlent à tout le monde avec un accent étrange et des mots terribles comme &laquo;Yo&raquo;, &laquo;Bro&raquo; ou autres &laquo;Wesh&raquo;. En plus de ça, ils refusent désormais de payer leur loyer. Il va falloir aller faire le ménage chez ces rats sans peur. Et ramener la princesse tant que vous y êtes.",
      objective: "Combattre un groupe de gros rats",
      reward: {
        gold: 50,
      },
      clue: "Un des rats portait un collier en os gravé &laquo;Propriété des Gobelins S.A.&raquo;. Et dans sa gueule, un morceau de chaussure brodée aux armes royales. Conclusion&nbsp;? Les gobelins sont passés par là et ont volé la princesse aux rats. Business as usual.",
    },
    {
      title: "Et après",
      description:
        "Les gobelins sont installés dans une grotte pas très loin du château, probablement parce qu’ils ont le flair pour l’immobilier abordable. Ils sortent la nuit, pètent les lanternes publiques, crient dans les puits et volent les dentiers des vieillards endormis. Bref, ils sont chiants. Pire&nbsp;:&nbsp;ils ont capturé des marchands et exigent une taxe de passage payable en jambons et cailloux polis. Pas de doute&nbsp;:&nbsp;ce sont eux les ravisseurs de la princesse. Il faut aller les corriger.",
      objective: "Combattre un groupe de trois gobelins lourds",
      reward: {
        gold: 150,
      },
      clue: "Dans la poche du chef gobelin, vous trouvez une lettre mal orthographiée signée &laquo;Mino Tôr&raquo;, avec un dessin d’un taureau qui sourit. Il y est question de &laquo;livraison rapide de princesse contre paiement&raquo;. Tout porte à croire que le Minotaure est derrière cette magouille inter-espèces et anti-princesse…",
    },
    {
      title: "Ça se corse",
      description:
        "Le Minotaure s’est installé dans un vieux labyrinthe en ruines et l’a transformé en temple IKEA&nbsp;:&nbsp;tout se ressemble, il manque des pièces et personne n’en sort vivant. On raconte qu’il a mangé trois marchands, un cheval et une chèvre, mais qu’il a épargné un pigeon voyageur qui lui livrait du fromage. Autant dire que ce n’est pas un monstre de fiabilité. Heureusement pour vous, un fil de laine est accroché au mur, et il mène directement vers la chambre du Minotaure.",
      objective: "Combattre le Minotaure",
      reward: {
        gold: 300,
      },
      clue: "Au moment de mourir, le Minotaure a haleté&nbsp;:&nbsp;&laquo;Le dragon… elle est trop belle… je lui ai montré… il l’a prise…&raquo; avant de s’éteindre dans une flaque de bouse mystique. Il parlait évidemment de la princesse. Et du Dragon Vert, ce vieux romantique à écailles, pourtant gentil, mais tellement possessif.",
    },
    {
      title: "Libération",
      description:
        "Le Dragon Vert vit dans une tour trop petite pour lui, ce qui explique son humeur massacrante et la médiocrité des décorations intérieures. Il joue du luth, écrit des poèmes, collectionne les bougies parfumées, mais refuse catégoriquement de libérer la princesse. Il affirme que c’est &laquo;pour son bien&raquo;. Gronnella, quant à elle, n'aime pas la musique. Elle se plaint que la tour n'a pas de salle de bain, pas même une coiffeuse, qu'elle commence à sentir mauvais et que sa robe ne sied pas à son teint. Bref, il faut la délivrer de toute urgence.",
      objective: "Combattre le Dragon Vert et libérer la princesse",
      reward: {
        gold: 1000,
      },
      clue: "La princesse vous accueille avec un soupir d’agacement, vous traite de lent, crache sur vos bottes (par accident, sans doute), vous file un bisou sur la joue et s’en va en disant&nbsp;:&nbsp;&laquo;Bon, on se retrouve au bal, j’espère que t’as une tenue.&raquo; Fin de l’aventure&nbsp;? Peut-être. Début des problèmes&nbsp;? C’est sûr.",
    },
  ];

  for (const quest of data) {
    await Quest.findOrCreate({
      where: { title: quest.title },
      defaults: quest,
    });
  }
};
