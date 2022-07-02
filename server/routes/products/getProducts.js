const Product = require("../../model/product");

const getProducts = async (req, res) => {
    const products = await Product.find();

    if(req.query.sort === 'priceasc'){
        products.sort((a, b) => a.min_price - b.min_price);
    } else if(req.query.sort === 'pricedsc'){
        products.sort((a, b) => b.min_price - a.min_price);
    } else if(req.query.sort === 'date'){
        products.sort((a, b) => b.last_updated - a.last_updated);
    }

    return res.status(200).send({
        products: products,
        message: 'successfull'
    });
}

module.exports = getProducts;