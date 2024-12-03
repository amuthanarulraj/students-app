import mongoose from "mongoose";
import schemaConfig from "./schema-config.js";

const studentSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: String,
    email: {
        required: true,
        type: String
    },
    gender: String
}, schemaConfig);
const StudentModel = mongoose.model('student', studentSchema);
export default StudentModel;