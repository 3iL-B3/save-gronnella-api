const express = require("express");
const { allCharacters } = require("../controllers/charactersController");

const router = express.Router();

router.get("/", allCharacters);

module.exports = router;
