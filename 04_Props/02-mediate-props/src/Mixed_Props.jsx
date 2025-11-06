function Mixed_Props(props) {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <h4>age: {props.age}</h4>
            <div>{props.children}</div>
        </div>
    )
}

export default Mixed_Props
