import React from 'react';
import { ProjectAssignment } from "../types";

interface ProjectAssignmentItemProps {
  assignment: ProjectAssignment;
}

const ProjectAssignmentItem: React.FC<ProjectAssignmentItemProps> = ({ assignment }) => {
  return (
    <tr>
      <td>{assignment.employee_id.full_name}</td>
      <td>{assignment.project_code.project_name}</td>
      <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
    </tr>
  );
};

export default ProjectAssignmentItem;
