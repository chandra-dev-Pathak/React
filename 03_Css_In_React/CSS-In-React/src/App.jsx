import './App.css'
import Normal_import from './Normal_import.jsx'
import Fname from './Fname.jsx'
import Inline_CSS from './Inline_CSS.jsx'
import Obj_Inline_CSS from './Obj_Inline_CSS.jsx'
import Styled_Components from './Styled_Components.jsx'

function App() {

  return (
    <>

      <p className='Normal_import'>1. Normal Import CSS way.</p>
      <Normal_import />

      <p className='module_css'>2. Module CSS Import way.</p>
      <Fname />

      <p className='inline_css'>3. Inline CSS way.</p>
      <Inline_CSS />

      <p className='inline_css'>4. JS-Object in Inline CSS using style</p>
      <Obj_Inline_CSS />

      <p className='inline_css'>5. Styled components css in Java-script</p>
      <Styled_Components />


    </>
  )
}

export default App
