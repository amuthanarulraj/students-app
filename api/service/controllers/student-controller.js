import * as studentService from "./../services/student-service.js";
import { setSuccess, setError } from "./response-handler.js";

export const post = async (request, response) => {
    try {
        const newStudent = {...request.body};
        const student = await studentService.save(newStudent);
        setSuccess(student, response);
    } catch(error) {
        setError(error, response);
    }
}

export const put = async (request, response) => {
    try {
        const newStudent = {...request.body};
        const id = request.params.id
        const student = await studentService.update(id, newStudent);
        setSuccess(student, response);
    } catch(error) {
        setError(error, response);
    }
}

export const search = async (request, response) => {
    try {
        const params = {...request.query}
        const students = await studentService.search(params);
        setSuccess(students, response);
    } catch(error) {
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try {
        const id = request.params.id
        const student = await studentService.getById(id);
        setSuccess(student, response);
    } catch(error) {
        setError(error, response);
    }
}

export const deleteById = async (request, response) => {
    try {
        const id = request.params.id
        const empty = await studentService.deleteById(id);
        setSuccess(empty, response);
    } catch(error) {
        setError(error, response);
    }
}