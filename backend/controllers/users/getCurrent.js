const getCurrent = async (req, res) => {
  const { user } = req;

  res.status(200).json({
    token: user.token,
    user: {
      email: user.email,
    },
  });
};

module.exports = getCurrent;
