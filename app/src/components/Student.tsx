import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Student } from "../models/Student";
import { AppDispatch } from "../store";
import { deleteStudent } from "../store/student-store";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type PropsType = {
    student: Student
}

export default function StudentComponent(props: PropsType) {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { t } = useTranslation('common');
    const student = props.student;
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {student.lastName}, {student.firstName}
                </Typography>
                <Typography variant="h5" component="div">
                {student.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate(`/students/${student.id}`)}>{t('student.view.label')}</Button>
                <Button onClick={() => dispatch(deleteStudent(student.id))}>{t('student.delete.label')}</Button>
            </CardActions>
        </Card>
    );
}