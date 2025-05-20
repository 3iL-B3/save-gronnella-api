const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const charactersRoutes = require("./routes/charactersRoutes");
const creaturesRoutes = require("./routes/creaturesRoutes");
const itemsRoutes = require("./routes/itemsRoutes");
const questsRoutes = require("./routes/questsRoutes");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);
app.use("/api/characters", charactersRoutes);
app.use("/api/creatures", creaturesRoutes);
app.use("/api/items", itemsRoutes);
app.use("/api/quests", questsRoutes);

module.exports = app;
