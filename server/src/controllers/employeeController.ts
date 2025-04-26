import { Request, Response } from 'express';
import Employee from '../models/Employee';
import bcrypt from 'bcrypt';

export const addEmployee = async (req: Request, res: Response): Promise<void> => {
  try 
  {
    const { employee_id, full_name, email, password } = req.body;
    const exists = await Employee.findOne({ employee_id });
    if (exists) 
    {
      res.status(400).json({ message: 'Employee ID must be unique' });
      return;
    }

    const saltRounds = 10;
    const hashed_password = await bcrypt.hash(password, saltRounds);


    const newEmployee = new Employee({ employee_id, full_name, email, hashed_password });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } 
  catch (err) 
  {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const getEmployees = async (req: Request, res: Response): Promise<void> => {
  try 
  {
    const employees = await Employee.find().sort({ employee_id: 1 });
    res.json(employees);
  } 
  catch (err) 
  {
    res.status(500).json({ message: (err as Error).message });
  }
};
