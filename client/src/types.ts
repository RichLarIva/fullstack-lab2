
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