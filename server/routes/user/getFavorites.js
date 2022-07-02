const { User } = require("../../model/user");

const getFavorites = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id }).populate("favorites");
  if (!user) {
    return res.status(400).send({
      error: {
        message: "user does not exists",
      },
    });
  }
  return res.status(200).send({
    favorites: user.favorites,
    message: 'successfull',
  });
};

module.exports = getFavorites;
