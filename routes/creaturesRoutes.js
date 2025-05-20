const express = require("express");
const { allCreatures } = require("../controllers/creaturesController");

const router = express.Router();

router.get("/", allCreatures);

module.exports = router;
