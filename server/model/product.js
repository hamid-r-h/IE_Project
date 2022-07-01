const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  subCategory: String,
  description: String,
  image: String,
  prices: [
    {
      shopId: { type: mongoose.Types.ObjectId, ref: "shop" },
      price: Number,
      link: String
    },
  ],
  min_price: {type: Number, default: 0},
  max_price: {type: Number, default: 0},
  last_updated: Date
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
