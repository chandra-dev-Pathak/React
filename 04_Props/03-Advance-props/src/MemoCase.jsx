import React, { useState, memo } from "react";

/*
  Demo: React.memo
  - Child is wrapped with React.memo to avoid re-renders when props are same.
  - We'll show two scenarios: passing primitive prop (works) and passing object literal inline (fails).
*/

export default function MemoCase() {
    const [count, setCount] = useState(0);

    // stable primitive prop (works with memo)
    const stableName = "Raj";

    return (
        <div style={box}>
            <h3>Memo Case</h3>
            <button onClick={() => setCount(c => c + 1)}>Parent increment: {count}</button>

            <div style={{ marginTop: 8 }}>
                <strong>Good (primitive prop):</strong>
                <MemoChild name={stableName} />
            </div>

            <div style={{ marginTop: 8 }}>
                <strong>Bad (object literal each render):</strong>
                {/* This inline object creates a new reference every render → memo fails */}
                <MemoChild nameObj={{ name: "Raj" }} />
            </div>
        </div>
    );
}

/* memoized child expecting a primitive prop */
const MemoChild = memo(function MemoChild({ name }) {
    console.log("MemoChild (primitive) rendered");
    return <div>MemoChild name: {name}</div>;
});

/* memoized child that receives an object — will re-render because reference changes */
const MemoChildObj = memo(function MemoChildObj({ nameObj }) {
    console.log("MemoChild (object) rendered");
    return <div>MemoChildObj name: {nameObj.name}</div>;
});

const box = {
    border: "1px solid gray",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
};

// use alias names exported above in the main above: use MemoChild for primitive and MemoChildObj for object
// To keep file self-contained, export MemoChildObj as MemoChild to match usage:
const MemoChildExport = MemoChildObj;
export { MemoChildExport as MemoChildObj };

// Explanation

// Pass (prevents re-render): React.memo will skip re-render when the prop is a primitive (string/number/boolean) that remains referentially equal between renders. Example: name="Raj" stays same.

// Fail (does nothing): If you pass an inline object like nameObj={{ name: 'Raj' }} each render builds a new object with a new reference → shallow comparison fails → memo cannot help → child re-renders.

// Note: memo performs a shallow comparison. For deep comparisons you can provide custom comparator, but use cautiously.