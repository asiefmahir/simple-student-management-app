const AllStudent = (props) => {

    const editHandler = (studentId) => {
        props.setIsEditable(true);
        const student = props.students.find((item) => item.id === studentId);
        props.setEditableStudent(student);
        props.setStudentName(student.name)
    }

    const deleteHandler = (studentId) => {
        const newStudentList = props.students.filter((student) => student.id !== studentId);
        props.setStudents(newStudentList)
    };

    const presentHandler = (studentId) => {
        const student = props.students.find((item) => item.id === studentId);
        if(student.isPresent === undefined) {
            student.isPresent = true;
            props.setStudents([...props.students])
        } else if (student.isPresent === true) {
            alert("The student is already in the Present List")
        } else {
            alert("The student is already in the Absent List")
        }
    }

    const absentHandler = (studentId) => {
        const student = props.students.find((item) => item.id === studentId);
        if(student.isPresent === undefined) {
            student.isPresent = false;
            props.setStudents([...props.students])
        } else if (student.isPresent === false) {
            alert("The student is already in the Absent List")
        } else {
            alert("The student is already in the Present List")
        }
    }


    return (
        <div className="all-students" >
            <h2>All Students</h2>
            <ul>
                {props.students.map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => editHandler(student.id)} >Edit</button>
                        <button onClick={() => deleteHandler(student.id)} >Delete</button>
                        <button onClick={() => presentHandler(student.id)} >Present</button>
                        <button onClick={() => absentHandler(student.id)}> Absent</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllStudent