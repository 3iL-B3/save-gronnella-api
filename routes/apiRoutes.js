const express = require("express");
const { sayHello } = require("../controllers/apiController");

const router = express.Router();

router.get("/", sayHello);

module.exports = router;
