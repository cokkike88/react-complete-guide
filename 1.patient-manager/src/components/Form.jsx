import {useState, useEffect} from 'react';
import Error from './Error'
import ErrorChildren from './ErrorChildren';

const Form = ({ setPatients, patients, patient, setPatient }) => {

    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [symthoms, setSymthoms] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(patient).length > 0){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setAlta(patient.alta)
            setSymthoms(patient.symthoms)
        }
    }, [patient])

    const cleanFields = () => {
        setName('')
        setOwner('')
        setEmail('')
        setAlta('')
        setSymthoms('')
        setPatient({})
    }

    const createId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date;
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        if([name, owner, email, alta, symthoms].includes('')){            
            setError(true)
            return
        }
        setError(false)

        const objPatient = {
            name,
            owner,
            email,
            alta,
            symthoms
        }

        if(patient.id){
            objPatient.id = patient.id
            const pActualizado = patients.map(p => p.id === patient.id ? objPatient: p)
            setPatients(pActualizado)
        }
        else {
            objPatient.id = createId()
            setPatients([...patients, objPatient])
        }

        
        cleanFields()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 bg-red mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agrega Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form
                onSubmit={handlerSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5">
                { error && <Error message="All the fields are required" /> }
                { error && <ErrorChildren><p>All the fields are required!!! from the child component</p></ErrorChildren> }
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />                    
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        id="owner"
                        type="text"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        placeholder="Nombre propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />                    
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email contacto propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />                    
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                    <input
                        id="alta"
                        type="date"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />                    
                </div>
                <div className="mb-5">
                    <label htmlFor="symthoms" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                    <textarea
                        id="symthoms" 
                        value={symthoms}
                        onChange={(e) => setSymthoms(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Symthoms"
                    />            
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer
                        transition-all"
                    value={ patient.id? "Editar paciente" : "Agregar Paciente"} />
            </form>
        </div>
        
    )
}

export default Form