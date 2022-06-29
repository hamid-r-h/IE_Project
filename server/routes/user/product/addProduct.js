const Product = require("../../../model/product");
const Shop = require("../../../model/shop");
const _ = require("lodash");
const { User } = require("../../../model/user");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {
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

  const product = new Product({
    ..._.pick(req.body, ["name", "category", "description", "image"]),
    min_price: req.body.price,
    max_price: req.body.price,
    last_updated: new Date(Date.now()),
    prices: [
      {
        shopId: shop._id,
        price: req.body.price,
        link: req.body.link,
      },
    ],
  });
  await product.save();
  return res.status(200).send({
    message: "product added successfully",
  });
};

module.exports = addProduct;
