const express = require('express');
require('dotenv').config();
const { connectMongo } = require('./config/mongo');
const productRoutes = require('./routes/productRoutes');
const path = require('path');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');
const couponRoutes = require('./routes/couponRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // hoặc '*' nếu cho phép tất cả
  credentials: true, // nếu dùng cookie, JWT
}));

app.use(express.json());

connectMongo();

app.use('/auth', authRoutes);
app.use('/coupon', couponRoutes);


app.use('/api', productRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(9999, () => {
  console.log('🚀 Server running at http://localhost:9999');
});
