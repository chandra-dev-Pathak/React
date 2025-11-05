function Button({ label }) {

    let Button = {
        backgroundColor: "pink",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "1px solid black",
        marginTop: "20px"
    }

    return (

        <>
            <button style={Button}>{label}</button>
        </>

    )
}

export default Button
