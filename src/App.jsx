import Buttons from "./components/Button"
import FormComponent from "./components/FormComponent"
import InputField from "./components/InputField"
import SelectandOption from "./components/SelectandOption"
import UseReducerPractice from "./components/UseReducerPractice"


function App() {

  return (
    <div className="bg-slate-950 h-screen text-white text-center text-4xl">
      <Buttons />
      <InputField />
      <SelectandOption />
      <FormComponent />
      <hr className="text-white" />
      <h1>useReducer Practice</h1>
      <UseReducerPractice />
    </div>
  )
}

export default App
