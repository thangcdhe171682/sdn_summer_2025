const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  let mongoUser = null;

  try {
    // Kiểm tra email trùng trong Mongo
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: '❌ Email đã tồn tại' });
    }

    // Băm mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo token xác nhận
    const token = jwt.sign({ email }, process.env.EMAIL_SECRET, { expiresIn: '1d' });

    // Lưu vào Mongo
    mongoUser = new User({
      email,
      password: hashedPassword,
      isVerified: false,
      verifyToken: token
    });
    await mongoUser.save();

    // Gửi email xác nhận
    const link = `${process.env.BASE_URL}/auth/verify/${token}`;
    await sendEmail(email, 'Xác nhận tài khoản', `
      <p>Nhấn để xác nhận tài khoản: <a href="${link}">${link}</a></p>
    `);

    return res.status(201).json({
      message: '✅ Đăng ký thành công. Vui lòng xác nhận email.',
      email,
    });

  } catch (err) {
    if (mongoUser) {
      await User.deleteOne({ email });
    }

    return res.status(500).json({ message: '❌ Lỗi hệ thống', error: err.message });
  }
};

exports.verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const decoded = jwt.verify(token, process.env.EMAIL_SECRET);
    const user = await User.findOne({ email: decoded.email, verifyToken: token });
    if (!user) return res.status(404).json({ msg: 'Token không hợp lệ' });

    user.isVerified = true;
    user.verifyToken = null;
    await user.save();

    res.json({ msg: '✅ Xác nhận email thành công' });
  } catch (err) {
    res.status(400).json({ msg: '❌ Token hết hạn hoặc không hợp lệ' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: '❌ Không tìm thấy tài khoản' });

    if (!user.isVerified) {
      return res.status(401).json({ message: '❌ Tài khoản chưa xác nhận email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: '❌ Mật khẩu không đúng' });

    res.status(200).json({ message: '✅ Đăng nhập thành công', user });
  } catch (err) {
    res.status(500).json({ message: '❌ Lỗi server' });
  }
};
