const { User } = require("../../../model/user");
const mongoose = require("mongoose");
const Shop = require("../../../model/shop");
const Product = require("../../../model/product");

const addExistingProduct = async (req, res) => {
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
        message: "invalid shop id",
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
  if (!mongoose.Types.ObjectId.isValid(req.params.productid)) {
    return res.status(400).send({
      error: {
        message: "invalid product id",
      },
    });
  }
  const product = await Product.findOne({ _id: req.params.productid });
  if (!product) {
    return res.status(400).send({
      error: {
        message: "product does not exists",
      },
    });
  }
  await product.updateOne({
    $push: {
      prices: {
        shopId: req.params.shopid,
        price: req.body.price,
        link: req.body.link,
      },
    },
  });

  if (product.min_price > req.body.price) {
    product.min_price = req.body.price;
  }
  if (product.max_price < req.body.price) {
    product.max_price = req.body.price;
  }
  await product.save();
  return res.status(200).send({
    message: "product added to shop successfully",
  });
};

module.exports = addExistingProduct;
