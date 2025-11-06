import './App.css'
import Function_props from './Function_props.jsx'
import ShowName from './ShowName.jsx'
import Children_Prop from './Children_Prop.jsx'
import DefaultProps from './DefaultProps.jsx'
import PropsValidation from './PropsValidation.jsx'

function App() {

  // Functions are first-class objects so Function Allowed as Props
  const sayHi = () => alert("Hi!");

  return (
    <>
      <Function_props onClick={sayHi} />

      <ShowName />

      <Children_Prop />

      <DefaultProps />

      <PropsValidation />
    </>
  )
}

export default App
