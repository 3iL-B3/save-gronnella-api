const { Spell } = require("../models");

const getAllSpells = async () => {
  return await Spell.findAll();
};

const createSpell = async (spellData) => {
  return await Spell.create(spellData);
};

const getSpellById = async (id) => {
  return await Spell.findByPk(id);
};

module.exports = {
  getAllSpells,
  createSpell,
  getSpellById,
};
