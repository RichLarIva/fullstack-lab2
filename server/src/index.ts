import express, { Request, Response } from 'express';
import cors from 'cors';
const ip = require('ip'); // Importing the 'ip' module to get the server's IP address
import path from 'path';
import connectDB from './config/db';
import employeeRoutes from './routes/employees';
import projectRoutes from './routes/projects';
import assignmentRoutes from './routes/projectAssignments';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.use('/api/v1/employees', employeeRoutes); // Employee routes
app.use('/api/v1/projects', projectRoutes); // Project routes
app.use('/api/v1/assignments', assignmentRoutes); // Project assignment routes



const ipAddress = ip.address(); // Get the IP address of the server

app.listen(PORT, () => {
    console.log(`Server is running on http://${ipAddress}:${PORT}`); // Log the server's IP address and port
    console.log(`Server is running on http://localhost:${PORT}`); // Log the localhost address and port
})