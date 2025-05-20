const express = require("express");
const { allQuests } = require("../controllers/questsController");

const router = express.Router();

router.get("/", allQuests);

module.exports = router;
