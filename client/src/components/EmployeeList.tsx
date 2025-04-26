import { useState, useEffect } from "react";
import api from "../services/api";
import { Employee } from "../types";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h3>Current Employees</h3>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table>
            <thead>
                <tr>
                <th>Employee ID</th>
                <th>Full Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                <EmployeeItem key={employee._id} employee={employee} />
                ))}
            </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
