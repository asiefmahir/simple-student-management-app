import { useState } from "react";


const Form = (props) => {
    

    const addStudent = (event, name) => {
        event.preventDefault()
        if(name) {
            const newStudent = {
                id: Date.now(),
                name
            }
            props.setStudents([newStudent, ...props.students]);
            props.setStudentName("")
        } else {
            alert("Please provide a valid student name")
        }
    }

    const updateHandler = (event, name) => {
        event.preventDefault()
        if(name) {
            props.editableStudent.name = name || props.editableStudent.name;
            props.setStudentName("");
            props.setIsEditable(false);
            props.setEditableStudent(null)
        } else {
            alert("Please provide a valid student name")
        }
    }

    return (
        <form>
            <input value={props.studentName} onChange={(e) => props.setStudentName(e.target.value)} type="text" name="student-name" />
            <button onClick={(e) => props.isEditable ? updateHandler(e, props.studentName) : addStudent(e, props.studentName)} >
                {props.isEditable ? "Update Student" : "Add Student"}
            </button>
        </form>
    )
}

export default Form;