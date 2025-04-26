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


    return()

}