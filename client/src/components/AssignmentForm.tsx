import { useState, useEffect } from 'react';
import api from '../services/api';
import { Employee, Project } from '../types';

const AssignmentForm = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [assignmentData, setAssignmentData] = useState({
        employee_id: '',
        project_code: '',
        start_date: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeesRes = await api.get('/employees');
                const projectsRes = await api.get('/projects');
                setEmployees(employeesRes.data);
                setProjects(projectsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setAssignmentData({
            ...assignmentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/assignments', assignmentData); // NOTE: Correct endpoint
            console.log('Assignment added:', response.data);
            setAssignmentData({
                employee_id: '',
                project_code: '',
                start_date: '',
            });
        } catch (error) {
            console.error('Error adding assignment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Assign Employee to Project</h3>

            <select
                name="employee_id"
                value={assignmentData.employee_id}
                onChange={handleInputChange}
                required
            >
                <option value="">Select Employee</option>
                {employees.map((employee) => (
                    <option key={employee._id} value={employee._id}>
                        {employee.full_name}
                    </option>
                ))}
            </select>

            <select
                name="project_code"
                value={assignmentData.project_code}
                onChange={handleInputChange}
                required
            >
                <option value="">Select Project</option>
                {projects.map((project) => (
                    <option key={project._id} value={project._id}>
                        {project.project_name}
                    </option>
                ))}
            </select>

            <input
                type="date"
                name="start_date"
                value={assignmentData.start_date}
                onChange={handleInputChange}
                required
            />

            <button type="submit">Assign Employee</button>
        </form>
    );
};

export default AssignmentForm;
