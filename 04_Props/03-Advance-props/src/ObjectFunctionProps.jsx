import { useState } from "react";

export default function ObjectFunctionProps() {
    const [count, setCount] = useState(0);

    const handleClick = () => alert("Clicked!");

    return (
        <div style={box}>
            <h3>Case 3: Object or Function Props (New Reference)</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <Child data={{ name: "Ravi" }} onClick={handleClick} />
        </div>
    );
}

function Child({ data, onClick }) {
    console.log(" Child rendered - Case 3 ");
    return (
        <>
            <h4>{data.name}</h4>
            <button onClick={onClick}>Click Me</button>
        </>
    );
}

const box = {
    border: "1px solid gray",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
};