import { useEffect } from 'react'
import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {


  useEffect(() => {
    if(patients.length > 0){
      console.log('new patient was created')
    }
    
  }, [patients])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {patients.map((patient) => (
            <Patient 
              key={patient.id} patient={patient} 
              setPatient = {setPatient}
              deletePatient = {deletePatient}
            />
          ))}
        </>
      ) : 
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      }
      
    </div>
  );
};

export default PatientList;
