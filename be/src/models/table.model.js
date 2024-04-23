import mongoose from 'mongoose';

const tableSchema = mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: Boolean
    }
});

export default mongoose.model('tables', tableSchema);
