const { User } = require("../model/user");
const bcrypt = require('bcrypt');
const getToken = require("../util/jwt");

const login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).send({
      error: {
        message: "username does not exists",
      },
    });
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err || !result)
      return res
        .status(400)
        .send({ error: { message: "password is incorrect" } });

    const token = getToken({ id: user._id });
    return res.status(200).send({ token: token, message: "successful" });
  });
};

module.exports = login;