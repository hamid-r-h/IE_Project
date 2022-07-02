const Product = require("../../model/product");
const mongoose = require("mongoose");

const getProductDetail = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({
      error: {
        message: "invalid id",
      },
    });
  }
  const product = await Product.findOne({ _id: req.params.id }).populate({
    path: "prices",
    populate: {
      path: "shopId",
    },
  });
  if (!product) {
    return res.status(400).send({
      error: {
        message: "product does not exists",
      },
    });
  }
  return res.status(200).send({
    product: product,
    message: "successfull",
  });
};

module.exports = getProductDetail;
