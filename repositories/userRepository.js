const { User } = require("../models");

const findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const findById = async (id) => {
  return await User.findByPk(id);
};

const createUser = async ({ email, password }) => {
  return await User.create({ email, password });
};

module.exports = {
  findByEmail,
  findById,
  createUser,
};
