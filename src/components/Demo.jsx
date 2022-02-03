const Demo = (props) => {
    console.log(props);
    return (
        <div className = "Demo">
            Hello Demo
            {props.amariccha.map(student => (
                <p onClick = {()=> props.ammaricchareFunction("I am called")} >{student.name}</p>
            ))}
        </div>
    )
}

export default Demo