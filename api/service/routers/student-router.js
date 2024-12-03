import express from "express";
import * as studentController from "./../controllers/student-controller.js";

const router = express.Router();

router.route('/')
    .post(studentController.post)
    .get(studentController.search);

router.route('/:id')
    .get(studentController.get)
    .put(studentController.put)
    .delete(studentController.deleteById)

export default router;