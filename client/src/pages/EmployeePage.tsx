import '../App.css'
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { useState } from "react";

const EmployeePage = () => 
{
    const [showForm, setShowForm] = useState(true);

    const toggleView = () => 
    {
        setShowForm((prev) => !prev);
    }

  return (
    <>
        <h2>Employee Management</h2>
      <button onClick={toggleView}>
        {showForm ? "View Employees" : "Add New Employee"}
      </button>
      {showForm ? <EmployeeForm /> : <EmployeeList />}
    </>
  )
}

export default EmployeePage;
