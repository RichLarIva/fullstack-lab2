import express from 'express';
import { assignEmployeeToProject, getProjectAssignments } from '../controllers/projectAssignmentController';

const router = express.Router();

router.post('/', assignEmployeeToProject);
router.get('/', getProjectAssignments);

export default router;