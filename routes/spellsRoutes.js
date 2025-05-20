const express = require("express");
const router = express.Router();
const {
  getAllSpells,
  createSpell,
  getSpellById,
} = require("../controllers/spellsController");

router.get("/", getAllSpells);
router.post("/", createSpell);
router.get("/:id", getSpellById);

module.exports = router;
