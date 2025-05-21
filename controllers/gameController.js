const characterRepository = require("../repositories/characterRepository");
const playerCharacterRepository = require("../repositories/playerCharacterRepository");

exports.selectCharacter = async (req, res) => {
  const userId = req.user.id;
  const characterId = req.params.characterId;

  try {
    const character = await characterRepository.getCharacterById(characterId);

    if (!character) {
      return res.status(404).json({ error: "Personnage introuvable" });
    }

    // Vérifier si le joueur a déjà un personnage
    const existing = await playerCharacterRepository.findByUserId(userId);
    if (existing) {
      return res
        .status(400)
        .json({ error: "Ce joueur a déjà un personnage." });
    }

    const playerCharacter = await playerCharacterRepository.createFromTemplate(
      userId,
      character
    );
    res.status(201).json(playerCharacter);
  } catch (err) {
    console.error("Erreur dans selectCharacter:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
