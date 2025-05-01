import Header from "./components/Header"
import PatientForm from "./components/PatientForm"
import QueryInput from "./components/QueryInput"
import DisplayTable from "./components/DisplayTable"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <PatientForm />
      <QueryInput/>
      <DisplayTable/>
    </div>
  )
}

export default App
