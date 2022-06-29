const Shop = require("../../model/shop");
const { User } = require("../../model/user");

const addShop = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  if (!user) {
    return res.status(400).send({
      error: {
        message: "user does not exists",
      },
    });
  }
  const shop = new Shop({
    name: req.body.name
  });
  const savedShop = await shop.save();
  await user.update({ $push: { shops: savedShop._id } });
  return res.status(200).send({
    message: "shop added successfully",
  });
};

module.exports = addShop;
