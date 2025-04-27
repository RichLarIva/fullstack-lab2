
export interface Employee {
  _id: string;
  employee_id: string;
  full_name: string;
  email: string;
  hashed_password: string;
}

export interface Project {
  _id: string;
  project_code: string;
  project_name: string;
  project_description: string;
}

export interface ProjectAssignment {
    _id: string;
    employee_id: {
      _id: string;
      full_name: string;
    };
    project_code: {
      _id: string;
      project_name: string;
    };
    start_date: string;
  }
  
  