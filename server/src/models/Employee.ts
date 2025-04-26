import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  employee_id: string;
  full_name: string;
  email: string;
  hashed_password: string;
}

const EmployeeSchema: Schema = new Schema<IEmployee>({
  employee_id: { type: String, required: true, unique: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  hashed_password: { type: String, required: true },
});

// MongoDB will automatically create the collection when we insert documents
export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
