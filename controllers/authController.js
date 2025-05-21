const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

const JWT_SECRET = "untrucvraimentsecretàchangerenprod";

const createToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "24h",
  });
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await userRepository.findByEmail(email);
    if (existing) {
      return res.status(409).json({ error: "Email déjà utilisé" });
    }
    const user = await userRepository.createUser({ email, password });
    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    console.error("Erreur register :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userRepository.findByEmail(email);
    if (!user || !(await user.validatePassword(password))) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    const token = createToken(user);
    res.json({ token });
  } catch (err) {
    console.error("Erreur login :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.me = async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.error("Erreur me :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
