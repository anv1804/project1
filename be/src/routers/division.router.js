import {
    tableIsset,
    userIsset
} from '../divisions/index.js';
import express from 'express';

const router = express.Router();

// get all Tables
router.get('/table', tableIsset);
// get user by id
router.get('/user', userIsset);


export default router;
