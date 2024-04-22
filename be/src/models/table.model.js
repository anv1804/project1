import mongoose from 'mongoose';

const tableSchema = mongoose.Schema({
    name: {
        type: String,
    },
    number: {
        type: Number,
    },
    status: {
        type: Boolean
    }
});

export default mongoose.model('tables', tableSchema);
