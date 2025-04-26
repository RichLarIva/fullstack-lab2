import {useState} from 'react';
import api from "../services/api";

const EmployeeForm = () => 
{
    const [employeeData, setEmployeeData] = useState({
        employee_id: '',
        full_name: '',
        email: '',
        password: ''
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
                password: ''
            });
        }
        catch (error)
        {
            console.error('Error adding employee:', error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add New Employee</h3>
            <input 
                type="text"
                name='employee_id'
                placeholder='Employee ID'
                value={employeeData.employee_id}
                onChange={handleInputChange}
                required
            />
            <input 
                type="text"
                name='full_name'
                placeholder='Full Name'
                value={employeeData.full_name}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name='email'
                placeholder='Email'
                value={employeeData.email}
                onChange={handleInputChange}
                required
            />
            <input
                type="password"
                name='hashed_password'
                placeholder='Password'
                value={employeeData.password}
                onChange={handleInputChange}
                required
            />

            <input type="submit" value="Add Employee" />
        </form>
    )

}

export default EmployeeForm;
// This code defines a React component for adding a new employee. 
// It uses the useState hook to manage the form data and handles input changes and form submission. 
// The form data is sent to the server using an API service when the form is submitted. 