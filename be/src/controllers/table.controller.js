import Table from "../models/table.model.js";
// [GET] : get all table
export const getTables = (req, res) => {
  Table.find()
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.json({ message: "Không có dữ liệu" });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

// [GET/:ID] : get table by ID
export const getTableById = (req, res) => {
  const id = req.params.id;
  if (id) {
    Table.findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ message: "Không tìm thấy id bàn" });
  }
};

// [POST] : add new table
export const addTable = (req, res) => {
  const data = req.body;
  if (data && data !== "") {
    Table.create(data)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ message: "Không tìm thấy id bàn" });
  }
};
// [PUT/:ID] : upload table
export const uploadTable = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if (data && data !== "") {
    Table.findByIdAndUpdate(id, data, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ message: "Không nhận được dữ liệu truyền vào" });
  }
};

// [DELETE] : delete table
export const deleteTable = (req, res) => {
  const id = req.params.id;
  if (id) {
    Table.findByIdAndDelete(id)
      .then((data) => {
        res.json({ messgae: "Xóa thành công" });
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ message: "Không tìm thấy id bàn" });
  }
};
