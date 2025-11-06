export default function User({ sendName }) {
    // Child sends data to parent via function props
    return (
        <button onClick={() => sendName("Rohan")}>
            Send Name to Parent
        </button>
    );
}