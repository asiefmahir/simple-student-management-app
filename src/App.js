import {useState} from 'react'
import './App.css'

/**
 * {
 *      id,
 *      name,
 *      isPresent: undefined
 * }
 */

const App = () => {
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const  [isEditable, setIsEditable] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);

    // {} === {} // false
    // {}

    const addStudent = (event, name) => {
        event.preventDefault()
        if(name) {
            const newStudent = {
                id: Date.now(),
                name
            }
            setStudents([newStudent, ...students]);
            setStudentName("")
        } else {
            alert("Please provide a valid student name")
        }
    }

    const updateHandler = (event, name) => {
        event.preventDefault()
        if(name) {
            editableStudent.name = name || editableStudent.name;
            setStudentName("");
            setIsEditable(false);
            setEditableStudent(null)
        } else {
            alert("Please provide a valid student name")
        }
    }

    const deleteHandler = (studentId) => {
        const newStudentList = students.filter((student) => student.id !== studentId);
        setStudents(newStudentList)
    };

    const editHandler = (studentId) => {
        setIsEditable(true);
        const student = students.find((item) => item.id === studentId);
        setEditableStudent(student);
        setStudentName(student.name)
    }

    const presentHandler = (studentId) => {
        const student = students.find((item) => item.id === studentId);
        if(student.isPresent === undefined) {
            student.isPresent = true;
            setStudents([...students])
        } else if (student.isPresent === true) {
            alert("The student is already in the Present List")
        } else {
            alert("The student is already in the Absent List")
        }
    }

    const absentHandler = (studentId) => {
        const student = students.find((item) => item.id === studentId);
        if(student.isPresent === undefined) {
            student.isPresent = false;
            setStudents([...students])
        } else if (student.isPresent === false) {
            alert("The student is already in the Absent List")
        } else {
            alert("The student is already in the Present List")
        }
    }

    const toggleHandler = (studentId) => {
        const student = students.find((item) => item.id === studentId);
        student.isPresent = !student.isPresent;
        setStudents([...students])
    }

    console.log(students);

    return (
        <div className = "App">
           <form>
               <input value = {studentName} onChange = {(e) => setStudentName(e.target.value)} type = "text" name = "student-name" />
               <button onClick = {(e) => isEditable ? updateHandler(e, studentName) : addStudent(e, studentName)} >
                   {isEditable ? "Update Student" : "Add Student"}
               </button>
           </form>
           <div className = "students">
                <div className = "all-students" >
                    <h2>All Students</h2>
                    <ul>
                        {students.map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick = {() => editHandler(student.id)} >Edit</button>
                                <button onClick = {() => deleteHandler(student.id)} >Delete</button>
                                <button onClick = {() => presentHandler(student.id)} >Present</button>
                                <button onClick = {() => absentHandler(student.id)}> Absent</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className = "present-students" >
                    <h2>
                        Present Student
                    </h2>
                    <ul>
                        {students.filter(item => item.isPresent === true).map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className = "absent-students" >
                    <h2>
                        Absent Student
                    </h2>
                    <ul>
                        {students.filter(item => item.isPresent === false).map(student => (
                            <li>
                                <span>{student.name}</span>
                                <button onClick={() => toggleHandler(student.id)} >Accidentally Added</button>
                            </li>
                        ))}
                    </ul>
                </div>

           </div>
        </div>
    )
}

export default App