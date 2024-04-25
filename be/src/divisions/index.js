import Table from '../models/table.model.js'
import User from '../models/user.model.js';
import userId from '../models/user.model.js'
// Nếu số nhân viên và số bàn không thay đổi 

// => trả về những bàn đã mở nhưng chưa có nhân viên làm
export const tableIsset = (req, res) => {
    Table.find({ status: true, isset: false })
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
}
// => trả về những nhân viên đang trong ca nghỉ và thời gian ca nghỉ >= 15p
export const userIsset = (req, res) => {
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()
    const timer = hour * 3600 + min * 60 + sec
    console.log(timer - 16 * 60);
    const arrIsset = []
    const arrError = []

    User.find({ status: false, role: 1 })
        .then((data) => {
            if (data) {
                data.map((item) => {
                    if (item.countWork > 0 && (timer - item.timeRest >= 15 * 60)) {
                        arr.push(item)
                    } else if (item.countWork = 0) {

                    }
                })
                res.json(arr);
            } else {
                res.json({ message: 'Không có dữ liệu' });
            }
        })
        .catch((err) => {
            res.json(err);
        });
}