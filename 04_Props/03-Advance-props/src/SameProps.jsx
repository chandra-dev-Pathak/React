import { useState } from "react";

export default function SameProps() {
    const [count, setCount] = useState(0);
    return (
        <div style={box}>
            <h3>Case 2: Same Props (Primitive, No Change)</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Child name="Raj" />
        </div>
    );
}
function Child({ name }) {
    console.log("Child rendered - Case 2");
    return <h4>Hello {name}</h4>;
}

const box = {
    border: "1px solid gray",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
};
