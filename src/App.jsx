import Buttons from "./components/Button"
import FormComponent from "./components/FormComponent"
import InputField from "./components/InputField"
import SelectandOption from "./components/SelectandOption"


function App() {

  return (
    <div className="bg-slate-950 h-screen text-white text-center text-4xl">
      <Buttons />
      <InputField />
      <SelectandOption />
      <FormComponent />
    </div>
  )
}

export default App
