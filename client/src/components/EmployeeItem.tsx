import { Employee } from "../types";

interface EmployeeItemProps {
    employee: Employee;
}

const EmployeeItem = ({employee}: EmployeeItemProps) => {
    return (
        <tr className="employee-item">
            <td>{employee.employee_id}</td>
            <td>{employee.full_name}</td>
            <td>{employee.email}</td>
        </tr>
    );
}

export default EmployeeItem;