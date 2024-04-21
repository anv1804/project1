import {
    getUsers,
    getUserById,
    register,
    uploadUser,
    login,
    deleteUser,
} from '../controllers/user.controller.js';
import express from 'express';

const router = express.Router();

// get all users
router.get('/', getUsers);
// get user by id
router.get('/:id', getUserById);
// register
router.post('/register', register);
// login
router.post('/login', login);
// upload
router.put('/:id', uploadUser);
// delete
router.delete('/:id', deleteUser);

export default router;
