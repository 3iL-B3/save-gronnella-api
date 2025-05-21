const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const { selectCharacter } = require("../controllers/gameController");

router.post("/select-character/:characterId", requireAuth, selectCharacter);

module.exports = router;
