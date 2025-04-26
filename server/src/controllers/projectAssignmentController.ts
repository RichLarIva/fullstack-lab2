import { Request, Response } from 'express';
import ProjectAssignment from '../models/ProjectAssignment';

export const assignEmployeeToProject = async (req: Request, res: Response): Promise<void> => 
{
    try
    {
        const { employee_id, project_code, start_date } = req.body;
        const assignment = new ProjectAssignment({ employee_id, project_code, start_date });
        await assignment.save();
        res.status(201).json(assignment);
    }
    catch (err)
    {
        res.status(500).json({ message: (err as Error).message });
    }

};

export const getProjectAssignments = async (req: Request, res: Response): Promise<void> => 
{
    try
    {
        const assignments = await ProjectAssignment.find()
        .populate('employee_id')
        .populate('project_code')
        .sort({ start_date: -1 });
        res.json(assignments);
    }
    catch (err)
    {
        res.status(500).json({ message: (err as Error).message });
    }
};
