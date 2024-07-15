const Shop = require("../../model/shop");
const { User } = require("../../model/user");
const mongoose = require('mongoose');

const getReports = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  if (!user) {
    return res.status(400).send({
      error: {
        message: "user does not exists",
      },
    });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.shopid)) {
    return res.status(400).send({
      error: {
        message: "invalid id",
      },
    });
  }
  const shop = await Shop.findOne({ _id: req.params.shopid });
  if (!shop) {
    return res.status(400).send({
      error: {
        message: "shop does not exists",
      },
    });
  }
  let userShopId = user.shops.find((s) => s.equals(shop._id));

  if (!userShopId) {
    return res.status(400).send({
      error: {
        message: "the shop does not belong to the user",
      },
    });
  }
  const reports = shop.reports;
  return res.status(200).send({
    reports: reports,
    message: "successfull",
  });
};

module.exports = getReports;
