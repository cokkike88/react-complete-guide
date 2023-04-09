
const Patient = ({ patient, setPatient, deletePatient }) => {

  const { name, owner, email, alta, symthoms, id } = patient

  const handlerDelete = () => {
    const response = confirm('Deseas eliminar este paciente?')

    if(response){
      deletePatient(id)
    }
  }

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">fecha de alta: {''}
        <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">sintomas: {''}
        <span className="font-normal normal-case">{symthoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >Update</button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handlerDelete}
        >Delete</button>
      </div>
    </div>
  )
}

export default Patient