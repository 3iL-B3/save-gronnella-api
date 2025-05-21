const jwt = require("jsonwebtoken");
const { User } = require("../models");

const JWT_SECRET = "untrucvraimentsecretàchangerenprod";

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Non autorisé" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user)
      return res.status(401).json({ error: "Utilisateur introuvable" });

    req.user = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    next();
  } catch (err) {
    console.error("Erreur auth :", err);
    res.status(401).json({ error: "Token invalide" });
  }
};
