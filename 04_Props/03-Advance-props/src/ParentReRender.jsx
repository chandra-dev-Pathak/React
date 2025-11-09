import { useState } from "react";

export default function ParentReRender() {
    const [count, setCount] = useState(0);

    return (
        <div style={box}>
            <h3>Case 4: Parent Re-rendered (Props same)</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <Child name="Ravi" />
        </div>
    );
}


function Child({ name }) {
    console.log("Child rendered - Case 4");
    return <h4>{name}</h4>;
}

const box = {
    border: "1px solid gray",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
};