import React from 'react'

const ListaPacientes = ({ pacientes }) => {                                     //Recibimos la lista de pacientes por props
    return (
        <ul>
            {pacientes.map((paciente, i) => (                                   //Mapeamos la lista de pacientes para tener una lista de etiqueta LI
                <li key={i}>                                                    {/* Agregamos el key para no tener errores */}
                    {paciente.nombre} {paciente.apellido} - {paciente.edad}     {/* Obtenemos los datos de cada paciente */}
                </li>
            ))}
        </ul>
    )
}

export default ListaPacientes
