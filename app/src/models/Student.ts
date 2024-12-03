
export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
}

export const studentList: Student[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail.com', gender: 'M'},
    { id: '2', firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gmail.com', gender: 'F'}
]