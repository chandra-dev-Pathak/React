import User from './User.jsx'

function ShowName() {
    // SAME concept used in forms, inputs, search bars, modals, etc.
    const showName = (name) => alert("Hello " + name);
    return (
        <>
            <User sendName={showName} />
        </>
    )
}

export default ShowName
