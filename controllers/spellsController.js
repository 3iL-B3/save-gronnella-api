const spellRepository = require("../repositories/spellRepository");

exports.getAllSpells = async (req, res) => {
  try {
    const spells = await spellRepository.getAllSpells();
    res.json(spells);
  } catch (err) {
    console.error("Erreur dans getAllSpells :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.createSpell = async (req, res) => {
  try {
    const spell = await spellRepository.createSpell(req.body);
    res.status(201).json(spell);
  } catch (err) {
    console.error("Erreur dans createSpell :", err);
    res
      .status(500)
      .json({ error: "Erreur serveur lors de la création du sort" });
  }
};

exports.getSpellById = async (req, res) => {
  try {
    const spell = await spellRepository.getSpellById(req.params.id);
    if (!spell) {
      return res
        .status(404)
        .json({ error: `Sort avec l'id ${req.params.id} introuvable` });
    }
    res.json(spell);
  } catch (err) {
    console.error("Erreur dans getSpellById :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
