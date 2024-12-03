import { useSelector, useDispatch } from "react-redux";
import StudentComponent from "./Student";
import { selectStudents, loadStudents } from "../store/student-store";
import { useEffect } from "react";
import { getStudents } from "../services/student-service";
import { AppDispatch } from "../store";

export default function StudentList() {
    const students = useSelector(selectStudents);
    const dispatch = useDispatch<AppDispatch>();
    const studentElements = students.map(s => <StudentComponent student={s} key={s.id}/>)
    useEffect(() => {
        getStudents().then(s => dispatch(loadStudents(s)));
    }, []);
    return <section >
        {studentElements}
    </section>;
}