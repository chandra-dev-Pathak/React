import PropsChanged from './PropsChanged.jsx'
import SameProps from './SameProps.jsx'
import ObjectFunctionProps from './ObjectFunctionProps.jsx'

function Reconciliation() {
    return (
        <>
            <h2>React Reconciliation & Re-render Cases</h2>
            <p>Observe console logs to see when each child re-renders.</p>
            <PropsChanged />
            <SameProps />
            <ObjectFunctionProps />
        </>
    )
}

export default Reconciliation
