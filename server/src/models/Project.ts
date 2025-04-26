import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  project_code: string;
  project_name: string;
  project_description: string;
}

const ProjectSchema: Schema = new Schema<IProject>({
  project_code: { type: String, required: true, unique: true },
  project_name: { type: String, required: true },
  project_description: { type: String, required: true },
});

export default mongoose.model<IProject>('Project', ProjectSchema);
