module.exports = async ({ User }) => {
  const data = [
    {
      email: "bob@bob.com",
      password: "bobobob",
    },
  ];

  for (const user of data) {
    await User.findOrCreate({
      where: { email: user.email },
      defaults: user,
    });
  }
};
