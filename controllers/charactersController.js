const characterRepository = require("../repositories/characterRepository");

exports.allCharacters = async (req, res) => {
  try {
    const characters = await characterRepository.getAllCharacters();
    res.json({ characters });
  } catch (err) {
    console.error("Erreur dans le controller :", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await characterRepository.getCharacterById(id);

    if (!character) {
      return res
        .status(404)
        .json({ error: `Personnage avec l'id ${id} introuvable` });
    }

    res.json(character);
  } catch (err) {
    console.error("Erreur dans getCharacterById :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.createCharacter = async (req, res) => {
  try {
    const newCharacter = await characterRepository.createCharacter(req.body);
    res.status(201).json(newCharacter);
  } catch (err) {
    console.error("Erreur dans createCharacter :", err);
    res.status(500).json({ error: "Impossible de créer le personnage" });
  }
};

exports.assignSpellToCharacter = async (req, res) => {
  try {
    const { characterId, spellId } = req.body;
    const result = await characterRepository.assignSpellToCharacter(
      characterId,
      spellId
    );
    res.json({ message: "Sort assigné avec succès", character: result });
  } catch (err) {
    console.error("Erreur dans assignSpellToCharacter :", err);
    res.status(400).json({ error: err.message });
  }
};
