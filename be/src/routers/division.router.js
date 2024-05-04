import {
    tableIsset,
    inSertTable,
    putTable
} from '../divisions/index.js';
import express from 'express';

const router = express.Router();

// get all Tables
router.get('/table', tableIsset);
// get user by id
router.get('/user/:id', inSertTable);

router.put('/user/:id', putTable);


export default router;
