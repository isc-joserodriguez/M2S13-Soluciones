import React, { useState } from 'react'             //Importamos useState para el manejo del estado
import ListaPacientes from './ListaPacientes'       //Importamos el componente para mostrar los pacientes
import NuevoPaciente from './NuevoPaciente'         //Importamos el componente con el formulario para el nuevo paciente
const Ejercicio2 = () => {
    const [pacientes, setPacientes] = useState([    //Inicializamos el valor de los pacientes en el state
        {
            nombre: 'Adrian',
            apellido: 'Becerra',
            edad: 20,
            alta: false
        },
        {
            nombre: 'Saúl',
            apellido: 'Martinez',
            edad: 12,
            alta: true
        },
        {
            nombre: 'Samuel',
            apellido: 'Godinez',
            edad: 17,
            alta: false
        },
        {
            nombre: 'Miriam',
            apellido: 'Gutierrez',
            edad: 35,
            alta: false
        },
        {
            nombre: 'Paola',
            apellido: 'Perez',
            edad: 56,
            alta: false
        },
        {
            nombre: 'Fabila',
            apellido: 'Reyes',
            edad: 75,
            alta: false
        },
        {
            nombre: 'Manuel',
            apellido: 'Gonzalez',
            edad: 80,
            alta: true
        }
    ]);
    
    const updatePacientes = (newPaciente) => {      //Función que recibe un nuevo paciente y utiliza el setter del estado para agregar al paciente recibido
        setPacientes([...pacientes, newPaciente])

    }

    return (
        <div>
            <NuevoPaciente submited={updatePacientes} />    {/* Pasamos como props la función de la línea 50 */}
            <ListaPacientes pacientes={pacientes} />        {/* Pasamos como props la lista de pacientes */}
        </div>
    )
}

export default Ejercicio2
