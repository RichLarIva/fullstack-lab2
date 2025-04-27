import '../App.css'
import ProjectForm from "../components/ProjectForm";
import EmployeeList from "../components/EmployeeList";
import { useState } from "react";

const ProjectPage = () => 
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
        {showForm ? "View Projects" : "Add New Project"}
      </button>
      {showForm ? <ProjectForm /> : <EmployeeList />}
    </>
  )
}

export default ProjectPage;
