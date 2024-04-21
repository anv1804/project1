import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    numberphone: {
        type: String,
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: Number,
    },
});

export default mongoose.model('users', userSchema);
