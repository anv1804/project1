import mongoose from "mongoose";

const tableSchema = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
});

export default mongoose.model("tables", tableSchema);
