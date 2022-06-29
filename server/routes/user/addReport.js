const Shop = require("../../model/shop");

const addReport = async (req, res) => {
  const shop = await Shop.findOne({ _id: req.params.shopid });
  if (!shop) {
    return res.status(400).send({
      error: {
        message: "shop does not exists",
      },
    });
  }
  await shop.updateOne({ $push: { reports: req.body.report } });
  return res.status(200).send({
    message: "report added successfully",
  });
};

module.exports = addReport;
