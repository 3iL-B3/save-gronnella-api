const { PlayerCharacter } = require("../models");
const characterRepository = require("../repositories/characterRepository");

exports.selectCharacter = async (req, res) => {
  const userId = req.user.id;
  const characterId = req.params.characterId;

  try {
    const character = await characterRepository.getCharacterById(characterId);

    if (!character) {
      return res.status(404).json({ error: "Personnage introuvable" });
    }

    // Astuce : Vérifie qu'un PlayerCharacter n'existe pas déjà pour cet utilisateur
    const existing = await PlayerCharacter.findOne({ where: { userId } });
    if (existing) {
      return res
        .status(400)
        .json({ error: "Ce joueur a déjà un personnage actif." });
    }

    const playerCharacter = await PlayerCharacter.create({
      userId,
      characterId: character.id,
      health: character.healthMax,
      mana: character.manaMax,
      fortune: character.fortuneBase,
    });

    res.status(201).json(playerCharacter);
  } catch (err) {
    console.error("Erreur dans selectCharacter:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
