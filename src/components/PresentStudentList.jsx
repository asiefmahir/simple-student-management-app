const PresentStudentList = (props) => {
    return (
        <div className="present-students" >
            <h2>
                Present Student
            </h2>
            <ul>
                {props.students.filter(item => item.isPresent === true).map(student => (
                    <li>
                        <span>{student.name}</span>
                        <button onClick={() => props.toggleHandler(student.id)}>Accidentally Added</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PresentStudentList