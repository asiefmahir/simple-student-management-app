const AbsentStudentList = (props) => {
    return (
        <div className="absent-students" >
            <h2>
                Absent Student
            </h2>
            <ul>
                {props.students.filter(item => item.isPresent === false).map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => props.toggleHandler(student.id)} >Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AbsentStudentList;