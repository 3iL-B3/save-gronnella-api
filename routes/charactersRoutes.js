const express = require("express");
const {
  allCharacters,
  createCharacter,
  getCharacter,
  assignSpellToCharacter
} = require("../controllers/charactersController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/", allCharacters);
router.get("/:id", getCharacter);
router.post("/", requireAuth, createCharacter);
router.post('/assign-spell', requireAuth, assignSpellToCharacter);

module.exports = router;
