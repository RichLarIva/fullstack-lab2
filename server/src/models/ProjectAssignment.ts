import mongoose, { Schema, Document } from 'mongoose';

export interface IProjectAssignment extends Document {
  employee_id: mongoose.Types.ObjectId;
  project_code: mongoose.Types.ObjectId;
  start_date: Date;
}

const ProjectAssignmentSchema: Schema = new Schema<IProjectAssignment>({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  project_code: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  start_date: { type: Date, required: true },
});

export default mongoose.model<IProjectAssignment>('ProjectAssignment', ProjectAssignmentSchema);
