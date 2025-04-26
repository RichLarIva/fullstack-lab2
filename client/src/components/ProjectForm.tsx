import { useState } from 'react';
import api from "../services/api";

const ProjectForm = () =>
{
    const [projectData, setProjectData] = useState({
        project_code: '',
        project_name: '',
        project_description: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        try
        {
            const response = await api.post('/projects', projectData);
            console.log('Project added:', response.data);
            setProjectData({
                project_code: '',
                project_name: '',
                project_description: ''
            });
        }
        catch (error)
        {
            console.error('Error adding project:', error);
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <h3>Add New Project</h3>
            <input 
                type="text"
                name='project_code'
                placeholder='Project Code'
                value={projectData.project_code}
                onChange={handleInputChange}
                required
            />
            <input 
                type="text"
                name='project_name'
                placeholder='Project Name'
                value={projectData.project_name}
                onChange={handleInputChange}
                required
            />
            <input 
                type="text"
                name='project_description'
                placeholder='Project Description'
                value={projectData.project_description}
                onChange={handleInputChange}
                required
            />
            <input type="submit" value="Add Employee" />
        </form>
    )

}

export default ProjectForm;
