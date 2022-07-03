const Shop = require("../../model/shop");
const mongoose = require("mongoose");

const addReport = async (req, res) => {
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


  await shop.updateOne({ $push: { reports: req.body.reports } });
  return res.status(200).send({
    message: "report added successfully",
  });
};

module.exports = addReport;
