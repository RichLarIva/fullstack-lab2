import express from 'express';
import { addEmployee } from '../controllers/employeeController';

const router = express.Router();

router.post('/', addEmployee); 

export default router;