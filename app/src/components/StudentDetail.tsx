import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { findStudent } from "../store/student-store";

export default function () {
    const { id } = useParams();
    const student = useSelector(findStudent(id));
    return (<h3>{student?.id} {student?.firstName}</h3>)
}