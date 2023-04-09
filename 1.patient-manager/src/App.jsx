import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {

    const getDataFromLocalStorage = () => {
      
      const localStoragePatients = JSON.parse(localStorage.getItem('patients')) ?? []
      console.log(localStoragePatients)
      setPatients(localStoragePatients)
    } 
    
    getDataFromLocalStorage()

  }, [])

  useEffect(() => {
    console.log('hi')
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
      const newPatients = patients.filter(p => p.id != id)
      setPatients(newPatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form           
          patients = {patients}
          setPatients = {setPatients}   
          patient = {patient}       
          setPatient = {setPatient}
        />
        <PatientList 
          patients = {patients}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
        />                
      </div>
      
    </div>
  )
}

export default App
