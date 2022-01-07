const express = require('express');
const router = express.Router();
const Product = require('../model/products');

// 渲染menu頁面
router.get('/', async (req, res) => {
  const { category } = req.query;
  let products;
  console.log(req.query)
  if (category === "" || !category) {
    products = await Product.find({});
  }
  if (category === 'chips') {
    products = await Product.find({ category: 'chips' });
  }
  if (category === 'drinks') {
    products = await Product.find({ category: 'drinks' });
  }
  if (category === 'hamburger') {
    products = await Product.find({ category: 'hamburger' });
  }
  res.render('menu/menu', {
    products: products,
    searchOptions: req.query
  });
})

module.exports = router;