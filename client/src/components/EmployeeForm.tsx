import {useState} from 'react';
import api from "../services/api";

const EmployeeForm = () => 
{
    const [employeeData, setEmployeeData] = useState({
        employee_id: '',
        full_name: '',
        email: '',
        hashed_password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();

        try
        {
            const response = await api.post('/employees', employeeData);
            console.log('Employee added:', response.data);
            setEmployeeData({
                employee_id: '',
                full_name: '',
                email: '',
                hashed_password: ''
            });
        }
        catch (error)
        {
            console.error('Error adding employee:', error);
        }
    };

    

}