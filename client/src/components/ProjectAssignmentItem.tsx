import React from 'react';

interface ProjectAssignmentItemProps {
  assignment: {
    employee_id: { full_name: string; employee_id: string };
    project_code: { project_name: string };
    start_date: string;
  };
}

const ProjectAssignmentItem: React.FC<ProjectAssignmentItemProps> = ({ assignment }) => {
  return (
    <tr>
      <td>{assignment.employee_id.employee_id}</td>
      <td>{assignment.employee_id.full_name}</td>
      <td>{assignment.project_code.project_name}</td>
      <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
    </tr>
  );
};

export default ProjectAssignmentItem;
