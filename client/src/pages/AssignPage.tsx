import '../App.css';
import AssignmentForm from "../components/AssignmentForm";
import ProjectAssignmentList from "../components/ProjectAssignmentList"
import { useState } from "react";

const ProjectAssignmentsPage = () => 
{
    const [showForm, setShowForm] = useState(true);

    const toggleView = () => 
    {
        setShowForm((prev) => !prev);
    }

    return (
        <>
            <h2>Project Assignments</h2>
            <button onClick={toggleView}>
                {showForm ? "View Assignments" : "Assign Employee" }
            </button>
            {showForm ? <AssignmentForm /> : <ProjectAssignmentList />}
        </>
    );
}

export default ProjectAssignmentsPage;
