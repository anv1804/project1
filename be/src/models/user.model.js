import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
    },
    countWork: {
        type: Number,
    },
    timeWork: {
        type: String
    },
    timeRest: {
        type: String
    },
    status: {
        type: Boolean
    },
    role: {
        type: Number,
    }
});

export default mongoose.model('users', userSchema);
