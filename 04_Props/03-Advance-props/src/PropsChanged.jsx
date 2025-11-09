import { useState } from "react";

export default function PropsChanged() {
    const [num, setNum] = useState(1);

    return (
        <div style={box}>
            <h3>Case 1: Props Changed (Primitive)</h3>
            <button onClick={() => setNum(num + 1)}>Increment</button>
            <Child number={num} />
        </div>
        // When props change (1 → 2), React re-renders the child.
    );
}

function Child({ number }) {
    console.log("Child rendered - Case ", { number });
    return <h4>Number: {number}</h4>;
}

const box = {
    border: "1px solid gray",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
};
