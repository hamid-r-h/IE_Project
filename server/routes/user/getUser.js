const { User } = require("../../model/user");

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  if (!user) {
    return res.status(400).send({
      error: {
        message: "user does not exists",
      },
    });
  }
  return res.status(200).send(user);
};

module.exports = getUser;