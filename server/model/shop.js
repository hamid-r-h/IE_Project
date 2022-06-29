const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: String,
    reports: [String]
});

const Shop = mongoose.model('shop', shopSchema);

module.exports = Shop;