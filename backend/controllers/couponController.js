const Coupon = require('../models/Coupon');

exports.applyCoupon = async (req, res) => {
  const { code } = req.body;

  try {
    const coupon = await Coupon.findOne({ code });
    if (!coupon) return res.status(404).json({ msg: 'Không tìm thấy mã' });

    const now = new Date();
    if (now < coupon.startDate || now > coupon.endDate)
      return res.status(400).json({ msg: 'Mã không còn hiệu lực' });

    if (coupon.usageCount >= coupon.maxUsage)
      return res.status(400).json({ msg: 'Đã hết lượt dùng' });

    coupon.usageCount++;
    await coupon.save();

    res.json({ discount: coupon.discountPercent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
