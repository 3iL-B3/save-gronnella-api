const express = require("express");
const {
  allCharacters,
  createCharacter,
  getCharacter,
  assignSpellToCharacter
} = require("../controllers/charactersController");

const router = express.Router();

router.get("/", allCharacters);
router.get("/:id", getCharacter);
router.post("/", createCharacter);
router.post('/assign-spell', assignSpellToCharacter);

module.exports = router;
