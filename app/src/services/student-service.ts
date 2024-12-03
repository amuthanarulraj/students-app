import { Student } from "../models/Student";

const base = 'http://localhost:3002/students';

export const getStudents = async (): Promise<Student[]> => {
    const response = await fetch(base, {
        method: 'GET'
    });
    const students = await response.json()
    return students as Student[];
}

// {
//     students: []
// }