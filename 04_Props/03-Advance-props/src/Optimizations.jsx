import MemoCase from "./MemoCase";
import UseCallbackCase from "./UseCallbackCase";
import UseMemoCase from "./UseMemoCase";


// Go to [ note.md ] for Depth understanding 
// This Topic start With line number 1485

export default function OptimizationsDemo() {
    return (
        <div style={{ padding: 20 }}>
            <h2>React Optimization Demos</h2>
            <p>Open console to observe when children render (logs show renders).</p>
            <MemoCase />
            <UseCallbackCase />
            <UseMemoCase />
        </div>
    );
}
