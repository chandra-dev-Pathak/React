export default function Inside_props(props) {

    console.log(props); // inside props whole data in a obj

    let card = {
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "grey",
        marginTop: "20px",
        width: "fit-content"
    }


    return (
        <>
            <div style={card}>
                <h3>{props.title}</h3>
                <p>name: {props.name}</p>
            </div>
        </>
    )
}