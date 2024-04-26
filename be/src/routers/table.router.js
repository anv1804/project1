import {
    getTables,
    getTableById,
    addTable,
    uploadTable,
    deleteTable,
    getTableByName,
} from '../controllers/table.controller.js';
import express from 'express';

const router = express.Router();

// get all Tables
router.get('/', getTables);
// get user by id
router.get('/:id', getTableById);
// get user by name
router.get('/name/:name', getTableByName);
// register
router.post('/', addTable);
// upload
router.put('/:id', uploadTable);
// delete
router.delete('/:id', deleteTable);

export default router;
