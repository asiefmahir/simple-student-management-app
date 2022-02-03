import {useState} from 'react'
import Demo from './components/Demo'
import './App.css'
import Form from './components/Form';
import StudentSection from './components/StudentSection';

/**
 * {
 *      id,
 *      name,
 *      isPresent: undefined
 * }
 */

    // {} === {} // false
    // {}

    


const App = () => {

    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const  [isEditable, setIsEditable] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);

    return (
        <div className = "App">
            <Form 
                students = {students}
                setStudents = {setStudents}
                isEditable = {isEditable}
                setIsEditable = {setIsEditable}
                setEditableStudent = {setEditableStudent}
                studentName = {studentName}
                setStudentName = {setStudentName}
                editableStudent = {editableStudent}
            />
            <StudentSection 
                isEditable = {isEditable}
                setIsEditable = {setIsEditable}
                setEditableStudent = {setEditableStudent}
                setStudentName = {setStudentName}
                students = {students}
                setStudents = {setStudents}
            />
        </div>
    )
}

export default App