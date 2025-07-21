const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: String,
  discountPercent: Number,
  startDate: Date,
  endDate: Date,
  maxUsage: Number,
  usageCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Coupon', couponSchema);
