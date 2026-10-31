const products = require("../data/products");

function getAllProducts(req, res) {
  res.status(200).json(products);
}

module.exports = { getAllProducts };
