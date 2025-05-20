const { Character, Spell } = require("../models");

const getAllCharacters = async () => {
  return await Character.findAll({
    include: {
      model: Spell,
      through: { attributes: [] },
    },
  });
};

const getCharacterById = async (id) => {
  return await Character.findByPk(id, {
    include: {
      model: Spell,
      through: { attributes: [] },
    },
  });
};

const createCharacter = async (characterData) => {
  return await Character.create(characterData);
};

const assignSpellToCharacter = async (characterId, spellId) => {
  const character = await Character.findByPk(characterId);
  const spell = await Spell.findByPk(spellId);

  if (!character || !spell) {
    throw new Error("Character ou Spell non trouvé");
  }

  await character.addSpell(spell);
  return character;
};

module.exports = {
  getAllCharacters,
  createCharacter,
  getCharacterById,
  assignSpellToCharacter,
};
