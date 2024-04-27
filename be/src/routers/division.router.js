import {
    tableIsset,
    inSertTable
} from '../divisions/index.js';
import express from 'express';

const router = express.Router();

// get all Tables
router.get('/table', tableIsset);
// get user by id
router.get('/user/:id', inSertTable);


export default router;
