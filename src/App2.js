import './App.css';
import { useState } from 'react'

function App2() {

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null)

  const addStudent = (event, name) => {
    event.preventDefault()
    if (name) {
      const newStudent = {
        id: Date.now(),
        name: name,
        // isPresent: undefined
      };

      setStudents([newStudent, ...students]);
      setStudentName("")
    } else {
      alert("Provide a valid student name")
    }
  }

  const editHandler = (id) => {
    const student = students.find((student) => student.id === id)
    setIsEditable(true);
    setEditableStudent(student);
    setStudentName(student.name)
  };

  const updateHandler = (event, name) => {
    if (name) {
      event.preventDefault()
      editableStudent.name = name || editableStudent.name;
      setStudentName("");
      setIsEditable(false);
      setEditableStudent(null)
    } else {
      alert("Provide a valid student name")
    }
  }

  const deleteHandler = (id) => {
    const newStudentList = students.filter((student) => student.id !== id);
    setStudents(newStudentList)
  }

  const presentHandler = (studentId) => {
    const test = [...students];
    const student = students.find((student) => student.id === studentId);
    if (student?.isPresent === undefined) {
      student.isPresent = true;
      setStudents(test)
    } else if (student?.isPresent === true) {
      alert("The student is already in the present List")
    } else {
      alert("The student is already in the Absent List")
    }
  }

  const absentHandler = (studentId) => {
    const test = [...students];
    const student = students.find((student) => student.id === studentId);
    if (student?.isPresent === undefined) {
      student.isPresent = false;
      setStudents(test)
    } else if (student?.isPresent === false) {
      alert("The student is already in the Absent List")
    } else {
      alert("The student is already in the Present List")
    }
  }

  const accidentHandler = (studentId) => {
    const test = [...students];
    const student = students.find((student) => student.id === studentId);
    student.isPresent = !student.isPresent
    setStudents(test)
  }

  console.log(students);
  return (
    <div className="App">
      <form>
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        <button onClick={(e) => !isEditable ? addStudent(e, studentName) : updateHandler(e, studentName)} >
          {isEditable ? "Update Student" : "Add Student"}
        </button>
      </form>
      <div className="students" style={{ border: "1px solid black" }}>
        <div className="all-student" style={{ border: "1px solid black" }}>
          <h2>All Student</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id} style={{ border: "1px solid black" }}>
                <span> {student.name} </span>
                <button onClick={() => editHandler(student.id)} > Edit </button>
                <button onClick={() => presentHandler(student.id)} > Present </button>
                <button onClick={() => absentHandler(student.id)} > Absent </button>
                <button onClick={() => deleteHandler(student.id)} > Delete </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="present-student">
          <h2>Present Students</h2>
          {students.filter(item => {
            console.log('I a,m callsed');
            return item?.isPresent === true
          }).map(student => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={() => accidentHandler(student.id)} >Accidentally Added</button>
            </li>
          ))}
        </div>
        <div className="absent-student">
          <h2>Absent Students</h2>

          {students.filter((item) => item?.isPresent === false).map(student => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={() => accidentHandler(student.id)} >Accidentally Added</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App2;
