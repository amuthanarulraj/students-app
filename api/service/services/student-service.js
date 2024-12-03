import Student from "./../models/student.js";

export const save = async (newStudent) => {
    const student = new Student(newStudent);
    return student.save();
}

export const search = async (params = {}) => {
    return await Student.find(params);
}

export const getById = async (id) => {
    return await Student.findById(id).exec();
}

export const update = async (id, student) => {
    return await Student.findByIdAndUpdate(id, student, { new: true }).exec();
}

export const deleteById = async (id) => {
    return await Student.findByIdAndDelete(id).exec();
}