const { User, userValidation } = require("../../model/user");
const hashing = require("../../util/hash");
const getToken = require("../../util/jwt");

const signup = async (req, res) => {
  console.log("aaaa")
  const user = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  });
  if (user) {
    return res.status(400).send({
      error: {
        message: 'username or email already exists',
      },
    });
  }

  const { error } = userValidation(req.body);
  if (error) {
    return res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }

  const newUser = new User(req.body);
  newUser.password = await hashing(newUser.password);
  const token = getToken({ id: newUser._id });
  newUser.save();
  console.log("ddd");

  return res
    .status(200)
    .send({ token: token, message: 'ok' });
};

module.exports = signup;
