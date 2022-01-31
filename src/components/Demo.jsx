const Demo = (props) => {
    console.log(props);
    return (
        <div className = "Demo">
            Hello Demo
            {props.names.map(name => (
                <p>{name}</p>
            ))}
        </div>
    )
}

export default Demo