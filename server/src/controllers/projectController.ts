import { Request, Response } from "express";
import Project from "../models/Project";

export const addProject = async(req: Request, res: Response): Promise<void> => 
{
    try
    {
        const { project_code, project_name, project_description} = req.body;
        const exists = await Project.findOne({project_code});
        if (exists)
        {
            res.status(400).json({ message: 'Project code must be unique' });
            return;
        }
        const newProject = new Project({ project_code, project_name, project_description });
        await newProject.save();
        res.status(201).json(newProject);
    }
    catch (err)
    {
        res.status(500).json({ message: (err as Error).message });
    }
}