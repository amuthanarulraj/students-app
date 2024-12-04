import { Student } from "../models/Student";

const base = 'https://studentapi-ftajf4ahfffddee4.eastus-01.azurewebsites.net/students';

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
