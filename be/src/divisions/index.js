import { uploadTable } from "../controllers/table.controller.js";
import Table from "../models/table.model.js";
import User from "../models/user.model.js";
import userId from "../models/user.model.js";
// Nếu số nhân viên và số bàn không thay đổi

// => trả về những bàn đã mở nhưng chưa có nhân viên làm
export const tableIsset = (req, res) => {
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const timer = hour * 3600 + min * 60 + sec;
    console.log(timer);
    const arrIsset = [];
    const arr2 = [];
    User.find({ status: false, role: 1 })
        .then((data) => {
            if (data) {
                data.map((item) => {
                    // console.log(item);
                    if (item.countWork > 0 && timer - item.timeRest >= 900) {
                        arrIsset.push(item);
                        arrIsset.sort((a, b) => {
                            return b.timeRest - a.timeRest;
                        });
                    } else if (item.countWork == 0) {
                        arr2.unshift(item);
                        arr2.sort((a, b) => {
                            return b.timeRest - a.timeRest;
                        });
                        // nếu ca làm của nhân viên là 0 thì sẽ được xếp lên đầu danh sách
                        arrIsset.unshift(...arr2);
                    }
                });
            } else {
                res.json({ message: "Không có dữ liệu" });
            }
            const result = arrIsset;
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
};
// => trả về những nhân viên đang trong ca nghỉ và thời gian ca nghỉ >= 15p
// export const userIsset = (req, res) => {
//     const tableId = req.params.id
//     const hour = new Date().getHours()
//     const min = new Date().getMinutes()
//     const sec = new Date().getSeconds()
//     const timer = hour * 3600 + min * 60 + sec
//     console.log(timer - 16 * 60);

//     const arrIsset = []
//     const arr2 = [];
//     User.find({ status: false, role: 1 })
//         .then((data) => {
//             if (data) {
//                 data.map((item) => {
//                     if (item.countWork > 0 && (timer - item.timeRest >= 900)) {
//                         arrIsset.push(item)
//                         arrIsset.sort((a, b) => {
//                             if (a.countRest !== b.countRest) {
//                                 // Nếu countRest khác nhau, sắp xếp tăng dần theo countRest
//                                 return a.countRest - b.countRest;
//                             } else {
//                                 // Nếu countRest giống nhau, sắp xếp giảm dần theo timeRest
//                                 return b.timeRest - a.timeRest;
//                             }
//                         });
//                     }
//                     else if (item.countWork == 0) {
//                         arr2.unshift(item)
//                         arr2.sort((a, b) => {
//                             if (a.countRest !== b.countRest) {
//                                 // Nếu countRest khác nhau, sắp xếp tăng dần theo countRest
//                                 return a.countRest - b.countRest;
//                             } else {
//                                 // Nếu countRest giống nhau, sắp xếp giảm dần theo timeRest
//                                 return b.timeRest - a.timeRest;
//                             }
//                         });
//                         // nếu ca làm của nhân viên là 0 thì sẽ được xếp lên đầu danh sách
//                         arrIsset.unshift(...arr2)
//                     }
//                 })
//             } else {
//                 res.json({ message: 'Không có dữ liệu' });
//             }
//             const result = arrIsset[0]
//             // res.json(result);
//             if (result.length !== 0) {
//                 const data1 = {
//                     isset: !result.isset,
//                     userId: result.id
//                 }
//                 // res.json(tableId);
//                 User.findByIdAndUpdate(result.id, { status: !result.status }, { new: true })
//                     // Table.findByIdAndUpdate(tableId, data, { new: true }).populate('userId')
//                     .then(() => {
//                         Table.findByIdAndUpdate(tableId, data1, { new: true }).populate('userId')
//                             .then((data) => {
//                                 res.json(data);
//                             })
//                             .catch((err) => {
//                                 res.json(err);
//                             });
//                     })
//                     .catch((err) => {
//                         res.json(err);
//                     });

//             } else {
//                 res.json("Không có nhân viên đủ điều kiện làm");
//             }
//         })
//         .catch((err) => {
//             res.json(err);
//         });

// }
// chức năng thay người
const userIsset = (callback) => {
    const arrRest = [];
    let result = {};

    User.find({ status: true, role: 1 }).populate("userId")
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.countWork == 0) {
                        result = item;
                    }
                    if (item.timeRest > 0) {
                        arrRest.push(item);
                        arrRest.sort((a, b) => {
                            return b.timeRest - a.timeRest;
                        });
                    }
                });
                if (result) {
                    return result;
                }
                console.log(arrRest[0]);
                return arrRest[0];
            } else {
                return null;
            }
        })
        .then(callback)
        .catch((err) => {
            return err;
        });
};

export const inSertTable = async (req, res) => {
    const tableId = req.params.id;
    const currnetTime = new Date();

    userIsset((user) => {
        console.log(user , 'sadsad');
        if (user) {
            Table.findByIdAndUpdate(
                tableId,
                {
                    status: true,
                    operatingTime : currnetTime,
                    userId: user._id
                },
                { new: true }
            )
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
        }
    });
};
