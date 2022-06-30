const { User } = require("../../model/user");
const mongoose = require("mongoose");

const removeFromFavorites = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  if (!user) {
    return res.status(400).send({
      error: {
        message: "user does not exists",
      },
    });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({
      error: {
        message: "invalid id",
      },
    });
  }
  let p = user.favorites.find((a) => a.equals(req.params.id));
  if (!p) {
    return res.status(400).send({
      error: {
        message: "product does not exists",
      },
    });
  }
  await user.updateOne({$pull: {favorites: req.params.id}});
  return res.status(200).send({
      message: 'successfull'
  });
};

module.exports = removeFromFavorites;
