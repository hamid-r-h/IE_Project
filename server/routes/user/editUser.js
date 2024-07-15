const { User } = require("../../model/user");

const editUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).send({
      error: {
        message: "user does not exists",
      },
    });
  }
  user.username = req.body.username;
  user.email = req.body.email;
  user.phone = req.body.phone;
  await user.save();
  return res.status(200).send({
    message: "user updated successfully",
  });
};

module.exports = editUser;
