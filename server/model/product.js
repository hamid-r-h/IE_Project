const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  description: String,
  prices: [
    {
      shopId: { type: mongoose.Types.ObjectId, ref: "shop" },
      price: Number,
    },
  ],
  min_price: Number,
  last_updated: Date
});

const Product = mongoose.model("product", productSchema);

module.exports = { Product, productSchema };
