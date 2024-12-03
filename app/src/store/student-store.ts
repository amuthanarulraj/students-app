import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../models/Student";
import { AppState } from ".";

export type StudentsState = Array<Student>;

const initialState: StudentsState = [];

export const studentSlice = createSlice({
    name: 'students',
    initialState: initialState,
    reducers: {
        loadStudents: (state: StudentsState, action: PayloadAction<StudentsState>) => {
            return [...action.payload];
        },
        deleteStudent: (state: StudentsState, action: PayloadAction<string>) => {
            return state.filter(s => s.id != action.payload);
        }
    }
})

export const { loadStudents, deleteStudent } = studentSlice.actions;

export const selectStudents = (state: AppState) => state.students;

export const findStudent = (id: string | undefined): ((state: AppState) => Student | undefined) => {
    return (state: AppState) => state.students.find(s => s.id === id && id !== undefined);
}

