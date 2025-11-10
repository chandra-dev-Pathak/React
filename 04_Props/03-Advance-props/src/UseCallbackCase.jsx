import { useState, useCallback, memo } from "react";

/*
  Demo: useCallback
  - Without useCallback: child (memoized) still re-renders because function prop changes each render.
  - With useCallback: function reference is stable, memoization prevents child re-render.
*/

function ActionButton({ onAction }) {
    console.log("ActionButton rendered");
    return <button onClick={onAction}>Action</button>;
}
const MemoActionButton = memo(ActionButton);

export default function UseCallbackCase() {
    const [count, setCount] = useState(0);

    // Not memoized function (new reference on every render) -> will cause re-render of MemoActionButton
    const handlerNotMemo = () => console.log("not memo handler");

    // Memoized function (reference stable) -> prevents re-render of MemoActionButton when used
    const handlerMemo = useCallback(() => {
        console.log("memo handler");
    }, []); // empty deps: stable forever

    return (
        <div style={box}>
            <h3>useCallback Case</h3>
            <button onClick={() => setCount(c => c + 1)}>Parent increment: {count}</button>

            <div style={{ marginTop: 8 }}>
                <strong>Without useCallback (fails):</strong>
                <MemoActionButton onAction={handlerNotMemo} />
            </div>

            <div style={{ marginTop: 8 }}>
                <strong>With useCallback (passes):</strong>
                <MemoActionButton onAction={handlerMemo} />
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


// Fail: If you pass a function created inline on every render (const fn = () => {}), its reference changes → React.memo sees a new prop → child re-renders.

// Pass: useCallback(fn, deps) returns the same function reference across renders while deps don’t change. When you pass that stable reference to a memoized child, the child won’t re-render.

// When to use: use useCallback when:-

// You pass functions to memoized children (or dependencies of other hooks)
// The child does non-trivial work or re-render cost is significant

// When NOT to use: If the child is cheap and re-render cost is tiny, useCallback adds complexity and small memory overhead.