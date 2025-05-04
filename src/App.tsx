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
  const [query, setQuery] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const setupSubscription = async () => {
      setLoading(true)
      try {
      const liveQuery = await db.live.query(`SELECT * FROM patients`, [],
        (results) => {
          const data = results.rows as PatientRecord[]
          setPatientRecords(data)
        }
      );
      unsubscribe = liveQuery.unsubscribe;
    }catch (error) {
      setError(error instanceof Error ? error.message : String(error))
    } finally {
      setLoading(false)
    }
    };

    setupSubscription();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);


  useEffect(() => {
    async function customQuery() {
      try {
        setLoading(true)
        const data = await db.query(query)
        setPatientRecords(data.rows as PatientRecord[])
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error))
      } finally {
        setLoading(false)
      }
    }
    if (query) {
      customQuery()
    }
  }, [query])

  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`)
    }
  }, [error])

    
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <PatientForm setPatientRecords={setPatientRecords} />
      <QueryInput setQuery={setQuery} setError={setError} />
      {loading ? (
        <div className="text-center mt-10">Loading patient records...</div>
      ) : (
        <DisplayTable patientRecords={patientRecords} />
      )}
     

    </div>

  )
}

export default App
