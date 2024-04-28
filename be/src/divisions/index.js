import Table from "../models/table.model.js";
import User from "../models/user.model.js";
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

// chức năng thay người
const userIsset = (resolve) => {
    const arrRest = [];
    User.find({ status: true, role: 1 })
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.countWork === 0) {
                        resolve(item);
                    }
                    console.log(1);
                    if (item.timeRest > 0) {
                        arrRest.push(item);
                        arrRest.sort((a, b) => {
                            return new Date(b.timeRest)  > new Date(a.timeRest);
                        });
                    }
                });
                console.log(arrRest);
                resolve(arrRest[0]);
            } else {
                resolve(null);
            }
        })
        .catch((err) => {
            return err;
        });
};

const userIssetPromise = new Promise((resolve, reject) => {
    userIsset(resolve);
});

export const inSertTable = async (req, res) => {
    const tableId = req.params.id;
    const currnetTime = new Date();

    const user = await userIssetPromise;

    User.findByIdAndUpdate(user._id, {
        countWork: 1,
        timeRest: 0,
        timeWork: currnetTime,
    });

    Table.findByIdAndUpdate(
        tableId,
        {
            status: true,
            operatingTime: currnetTime,
            userId: user._id,
        },
        { new: true }
    )
        .populate("userId")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
};

export const updateTable = async (req, res) => {
    const tableId = req.params.id;
    const userId = req.body.userId;

    const currnetTime = new Date();

    User.findByIdAndUpdate(userId, {
        timeRest: currnetTime,
        timeWork: "0",
    });

    Table.findByIdAndUpdate(
        tableId,
        {
            status: false,
            operatingTime: 0,
            userId: "aaaaaaaaaaaaaaaaaaaaaaaa",
        },
        { new: true }
    )
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
};
