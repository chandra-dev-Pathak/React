import Props_pass from "./Props_pass.jsx"
import Button from "./Button.jsx"
import Props_Destructuring from "./Props_Destructuring.jsx"
import Inside_props from "./Inside_props.jsx"
import './App.css'

function App() {

  return (
    <>
      <Props_pass name="Deepti sharma" age={23} regular={true} course={{ first_year: 'DSA', second_year: 'OOP' }} project={["Todo-List,", " Shooping,", " Gaming"]} />

      <Props_pass name="Deepti sharma" age={23} regular={true} project={["Todo-List,", " Shooping,", " Gaming"]} />

      <Button label="save me" />
      <Button label="save me" />

      <Inside_props title="Information" name="Chandra dev" age={19} islogin={true} subjects={{ one: "DSA", two: "OOP" }} />

      <Props_Destructuring name="raghaw" age={19} data={[1, 2, 3]} info={{ marks: 44, attend: 55 }} />


    </>)
}

export default App
