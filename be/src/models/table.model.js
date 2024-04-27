import mongoose from 'mongoose';

const tableSchema = mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: Boolean
    },
    isset: {
        type: Boolean
    },
    operatingTime: {
        type: Number
    }
    ,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
});

export default mongoose.model('tables', tableSchema);
