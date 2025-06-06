const express = require("express");
const path = require("path");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const charactersRoutes = require("./routes/charactersRoutes");
const creaturesRoutes = require("./routes/creaturesRoutes");
const itemsRoutes = require("./routes/itemsRoutes");
const questsRoutes = require("./routes/questsRoutes");
const spellsRoutes = require("./routes/spellsRoutes");
const authRoutes = require("./routes/authRoutes");
const gameRoutes = require("./routes/gameRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api", apiRoutes);
app.use("/api/characters", charactersRoutes);
app.use("/api/creatures", creaturesRoutes);
app.use("/api/items", itemsRoutes);
app.use("/api/quests", questsRoutes);
app.use("/api/spells", spellsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/game", gameRoutes);

module.exports = app;
