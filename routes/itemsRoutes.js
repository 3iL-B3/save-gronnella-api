const express = require("express");
const { allItems } = require("../controllers/itemsController");

const router = express.Router();

router.get("/", allItems);

module.exports = router;
