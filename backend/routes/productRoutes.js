const express = require('express');
const router = express.Router();

const mockProducts = [
  {
    title: 'Bluetooth Label Printer',
    price: 59.99,
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61VC0UjS4LL._AC_SL1500_.jpg'
  },
  {
    title: 'How to Sell on eBay for Beginners',
    price: 9.99,
    rating: 4,
    image: 'https://m.media-amazon.com/images/I/81Jj8UHQv2L.jpg'
  },
  {
    title: 'Buy Now Search Free for eBay',
    price: 0.00,
    rating: 3.5,
    image: 'https://m.media-amazon.com/images/I/31lmP-VI-zL._SX342_SY445_.jpg'
  }
];

router.get('/products', (req, res) => {
  res.json(mockProducts);
});

module.exports = router;
