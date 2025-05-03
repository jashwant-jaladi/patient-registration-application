import Header from "./components/Header"
import PatientForm from "./components/PatientForm"
import QueryInput from "./components/QueryInput"
import DisplayTable from "./components/DisplayTable"
import { useEffect, useState } from "react"
import db from "./lib/db"

export interface PatientRecord {
  id: string;
  firstname: string;
  lastname: string;
  dateofbirth: string;
  sex: string;
  height: number;
  weight: number;
  maritalstatus: string;
  contact_email: string;
  contact_phone: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  takingmedications: string;
  emergencycontact_firstname: string;
  emergencycontact_lastname: string;
  emergencycontact_relationship: string;
  emergencycontact_phone: string;
}

function App() {



  const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    async function fetchPatientRecords() {
      try {
        setLoading(true)
        const data = await db.query("SELECT * FROM patients")
        console.log(data.rows)
        setPatientRecords(data.rows as PatientRecord[])
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error))
      } finally {
        setLoading(false)
      }
    }
    fetchPatientRecords()
  }, [])
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }
  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <PatientForm setPatientRecords={setPatientRecords} />
      <QueryInput />
      <DisplayTable patientRecords={patientRecords} />
    </div>

  )
}

export default App
