const mongoose = require('mongoose');
require('dotenv').config();
const Coupon = require('../models/Coupon');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/clone_ebay';

const seedCoupons = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('✅ MongoDB connected');

  const now = new Date();
  const later = new Date();
  later.setDate(later.getDate() + 7); // hết hạn sau 7 ngày

  const coupons = [
    { code: 'SALE10', discountPercent: 10, startDate: now, endDate: later, maxUsage: 50 },
    { code: 'WELCOME15', discountPercent: 15, startDate: now, endDate: later, maxUsage: 100 },
    { code: 'SUMMER20', discountPercent: 20, startDate: now, endDate: later, maxUsage: 25 },
    { code: 'FLASH5', discountPercent: 5, startDate: now, endDate: later, maxUsage: 10 },
    { code: 'FREESHIP', discountPercent: 12, startDate: now, endDate: later, maxUsage: 70 }
  ];

  await Coupon.insertMany(coupons);
  console.log('✅ Inserted test coupons');
  process.exit();
};

seedCoupons().catch(err => {
  console.error('❌ Seeding failed:', err.message);
  process.exit(1);
});
