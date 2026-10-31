const products = require("../data/products");

function getAllProducts(req, res) {
  res.status(200).json(products);
}

function getProductById(req, res) {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Produk tidak ditemukan" });
  }

  res.status(200).json(product);
}

module.exports = { getAllProducts, getProductById };
