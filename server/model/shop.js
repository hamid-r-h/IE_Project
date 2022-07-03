const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name: String,
    reports: [{
        typ: String,
        description: String
    }]
});

const Shop = mongoose.model('shop', shopSchema);

module.exports = Shop;