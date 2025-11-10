import React, { useState, useMemo, memo } from "react";

/*
  Demo: useMemo
  - Passing objects/arrays as props normally creates new references each render.
  - useMemo stabilizes the object reference so memoized children do not re-render.
*/

function DataChild({ data }) {
    console.log("DataChild rendered");
    return <div>data.name: {data.name}</div>;
}
const MemoDataChild = memo(DataChild);

export default function UseMemoCase() {
    const [count, setCount] = useState(0);

    // Without useMemo: inline object new ref each render (fail)
    const inlineData = { name: "Ravi" };

    // With useMemo: stable reference (pass)
    const stableData = useMemo(() => ({ name: "Ravi" }), []);

    return (
        <div style={box}>
            <h3>useMemo Case</h3>
            <button onClick={() => setCount(c => c + 1)}>Parent increment: {count}</button>

            <div style={{ marginTop: 8 }}>
                <strong>Without useMemo (fails):</strong>
                <MemoDataChild data={inlineData} />
            </div>

            <div style={{ marginTop: 8 }}>
                <strong>With useMemo (passes):</strong>
                <MemoDataChild data={stableData} />
            </div>
        </div>
    );
}

const box = {
    border: "1px solid gray",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
};

// Explanation

// Fail: Passing { } or[] inline produces a new reference each render → child re - renders.

// Pass: useMemo(() => obj, deps) returns the same object reference while deps don't change so memoized children will not re-render.

// Also use for expensive calculations: useMemo can cache a computed value to avoid re - calculation each render.