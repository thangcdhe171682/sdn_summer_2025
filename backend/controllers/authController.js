const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Kiểm tra email trùng
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: '❌ Email đã tồn tại' });
    }

    // Băm mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo user mới
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: '✅ Đăng ký thành công',
      email: newUser.email,
    });
  } catch (err) {
    return res.status(500).json({ message: '❌ Lỗi hệ thống', error: err.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: '❌ Không tìm thấy tài khoản' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: '❌ Mật khẩu không đúng' });

    res.status(200).json({ message: '✅ Đăng nhập thành công', user });
  } catch (err) {
    res.status(500).json({ message: '❌ Lỗi server' });
  }
};
