import express from 'express';
import {addProject} from '../controllers/projectController';

const router = express.Router();

router.post('/', addProject);

export default router;