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
    let obRest = null;
    User.find({ status: true, role: 1 })
        .then((data) => {
            if (data) {
                data.forEach((item) => {
                    if (item.countWork === 0) {
                        resolve(item);
                    }
                    if (item.timeRest !== "0") {
                        if (!obRest) {
                            obRest = item;
                        } else {
                            let dateObRest = new Date(obRest.timeRest);
                            let dateItem = new Date(item.timeRest);
                            if (dateObRest > dateItem) {
                                obRest = item;
                            }
                        }
                    }
                });
                resolve(obRest);
            } else {
                resolve(null);
            }
        })
        .catch((err) => {
            return err;
        });
};

const updateUser = (id, data, resolve) => {
    User.findByIdAndUpdate(id, data,
        { new: true })
        .then((data) => resolve(data))
        .catch((err) => {
            return err;
        });
};

const updateTable = (id, data, resolve) => {
    Table.findByIdAndUpdate(
        id,
        data,
        { new: true }
    ).populate("userId")
    .then((data) => resolve(data))
    .catch((err) => {
        return err;
    });
};

export const inSertTable = async (req, res) => {
    const tableId = req.params.id;
    const currnetTime = new Date();

    const user = await new Promise((resolve, reject) => {
        userIsset(resolve);
    });

    if (user) {
        let dataUser = {
            countWork: 1,
            timeRest: "0",
            timeWork: currnetTime,
        };
        await new Promise((resolve) => {
            updateUser(user._id, dataUser, resolve);
        });

        let dataTable = {
            status: true,
            operatingTime: currnetTime,
            userId: user._id,
        };

        const table = await new Promise((resolve) => {
            updateTable(tableId, dataTable, resolve);
        });

        res.json(table);
    } else {
        res.json(null);
    }
};

export const putTable = async (req, res) => {
    const tableId = req.params.id;
    const userId = req.body.userId;

    const currnetTime = new Date();

    let dataUser = {
        timeRest: `${currnetTime}`,
        timeWork: "0",
    };
    await new Promise((resolve) => {
        updateUser(userId, dataUser, resolve);
    });

    let dataTable = {
        status: false,
        operatingTime: "0",
        userId: "aaaaaaaaaaaaaaaaaaaaaaaa",
    };

    const table = await new Promise((resolve) => {
        updateTable(tableId , dataTable, resolve);
    }); 

    res.json(table);
};
