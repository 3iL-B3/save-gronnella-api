const { PlayerCharacter } = require("../models");

const findByUserId = async (userId) => {
  return await PlayerCharacter.findOne({ where: { userId } });
};

const createFromTemplate = async (userId, character) => {
  return await PlayerCharacter.create({
    userId,
    characterId: character.id,
    health: character.healthMax,
    mana: character.manaMax,
    fortune: character.fortuneBase,
  });
};

module.exports = {
  findByUserId,
  createFromTemplate,
};
