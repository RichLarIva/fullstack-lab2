import { useState, useEffect } from "react";
import api from "../services/api";
import { Project } from "../types";

const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get("/projects");
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div>
            <h3>Current Projects</h3>
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Project Code</th>
                            <th>Project Name</th>
                            <th>Project Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project._id}>
                                <td>{project.project_code}</td>
                                <td>{project.project_name}</td>
                                <td>{project.project_description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProjectList;
