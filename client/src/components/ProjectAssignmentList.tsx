import { useState, useEffect } from "react";
import api from "../services/api";

import { ProjectAssignment } from "../types";
import ProjectAssignmentItem from "./ProjectAssignmentItem";

const ProjectAssignmentList = () => {
  const [assignments, setAssignments] = useState<ProjectAssignment[]>([]);
  const [sortBy, setSortBy] = useState<keyof ProjectAssignment | "">("");

  const fetchAssignments = async () => {
    try {
      const response = await api.get("/assignments");
      setAssignments(response.data);
    } catch (error) {
      console.error("Error fetching project assignments:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();

    const interval = setInterval(() => {
      fetchAssignments();
    }, 60000); // 1 minute

    return () => clearInterval(interval);
  }, []);

  const handleSort = (field: keyof ProjectAssignment) => {
    const sorted = [...assignments].sort((a, b) => {
      const aField = a[field];
      const bField = b[field];
      return aField > bField ? 1 : -1;
    });
    setAssignments(sorted);
    setSortBy(field);
  };

  return (
    <div>
      <h3>Latest Project Assignments</h3>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("employee_id")}>Employee Name</th>
            <th onClick={() => handleSort("project_code")}>Project Name</th>
            <th onClick={() => handleSort("start_date")}>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.slice(0, 5).map((assignment) => (
            <ProjectAssignmentItem key={assignment._id} assignment={assignment} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectAssignmentList;
