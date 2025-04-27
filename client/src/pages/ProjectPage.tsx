import '../App.css';
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList"; 
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
            <h2>Project Management</h2> {/* ✅ Correct title */}
            <button onClick={toggleView}>
                {showForm ? "View Projects" : "Add New Project"}
            </button>
            {showForm ? <ProjectForm /> : <ProjectList />}
        </>
    );
}

export default ProjectPage;
