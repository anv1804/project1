import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
// [GET] : get all products
export const getUsers = (req, res) => {
    User.find()
        .then((data) => {
            if (data) {
                res.json(data);
            } else {
                res.json({ message: 'Không có dữ liệu' });
            }
        })
        .catch((err) => {
            res.json(err);
        });
};

// [GET/:ID] : get user by ID
export const getUserById = (req, res) => {
    const id = req.params.id;
    if (id) {
        User.findById(id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    } else {
        res.json({ message: 'Không tìm thấy id người dùng' });
    }
};

// [POST] : register
export const register = async (req, res) => {
    const data = req.body;
    data.role = 1;
    data.status = false;
    data.countWork = 0;
    data.countRest = 0;
    data.avatar = "https://picsum.photos/200"
    const userCheck = await User.findOne({ email: data.email }); // check if user is already registered
    if (userCheck) {
        res.json({ message: 'Email đã được sử dụng' });
    }
    const passwordHashed = await bcrypt.hash(data.password, 12);
    data.password = passwordHashed;
    User.create(data)
        .then((newData) => {
            res.json(newData);
        })
        .catch((err) => {
            res.json(err);
        });
};

// [POST] : login
export const login = async (req, res) => {
    try {
        const data = req.body;
        const userCheck = await User.findOne({ email: data.email }); // check if user is already registered
        if (!userCheck) {
            res.json({
                message: 'Email không tồn tại hoặc chưa được đăng ký!',
            });
        }
        const isCheck = await bcrypt.compare(data.password, userCheck.password); // compare password
        if (!isCheck) {
            res.json({ message: 'Mật khẩu không đúng!' });
        }
        const token = await Jwt.sign(
            { name: userCheck.name, id: userCheck.id },
            userCheck.email,
            { expiresIn: '24h' },
        );
        data.password = undefined;
        res.json({ message: 'Đăng nhập thành công!', userCheck, token });
    } catch (error) {
        res.json(error);
    }
};

// [PUT/:ID] : upload user
export const uploadUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    if (id && data && data !== '') {
        User.findByIdAndUpdate(id, data, { new: true })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    } else {
        res.json({ message: 'Không nhận được dữ liệu truyền vào' });
    }
};

// [DELETE] : delete user
export const deleteUser = (req, res) => {
    const id = req.params.id;
    if (id) {
        User.findByIdAndDelete(id)
            .then((data) => {
                res.json({ messgae: 'Xóa thành công' });
            })
            .catch((err) => {
                res.json(err);
            });
    } else {
        res.json({ message: 'Không tìm thấy id người dùng' });
    }
};
