import AllStudent from './AllStudent';
import PresentStudentList from './PresentStudentList';
import AbsentStudentList from './AbsentStudentList';


const StudentSection = (props) => {

    const toggleHandler = (studentId) => {
        const student = props.students.find((item) => item.id === studentId);
        student.isPresent = !student.isPresent;
        props.setStudents([...props.students])
    }
    return (
        <div className="students">
            <AllStudent 
                students = {props.students}
                setStudents = {props.setStudents}
                isEditable = {props.isEditable}
                setIsEditable = {props.setIsEditable}
                setEditableStudent = {props.setEditableStudent}
                setStudentName = {props.setStudentName}
            />
            <PresentStudentList 
                toggleHandler = {toggleHandler}
                students = {props.students}
            />
            <AbsentStudentList 
                toggleHandler = {toggleHandler}
                students = {props.students}
            />
        </div>
    )
}

export default StudentSection