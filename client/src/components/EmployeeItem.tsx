import { Employee } from "../types";

interface EmployeeItemProps {
    employee: Employee;
}

const EmployeeItem = ({employee}: EmployeeItemProps) => {
    return (
        <div className="employee-item">
            <h3>Employee ID: {employee.employee_id}</h3>
            <p>{employee.full_name}</p>
            <p>Email: {employee.email}</p>
        </div>
    );
}

export default EmployeeItem;