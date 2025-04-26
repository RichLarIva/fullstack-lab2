import { Employee } from "../types";

interface EmployeeItemProps {
    employee: Employee;
}

const EmployeeItem = ({employee}: EmployeeItemProps) => {
    return (
        <tr className="employee-item">
            <td>Employee ID: {employee.employee_id}</td>
            <td>{employee.full_name}</td>
            <td>Email: {employee.email}</td>
        </tr>
    );
}

export default EmployeeItem;