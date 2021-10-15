import React from 'react'

const NuevoPaciente = ({ submited }) => {                 //Recibimos por props la función para actualizar el estado de pacientes
    const onSave = (e) => {                               //Función que se pasa en el evento del submit del formulario
        e.preventDefault();                               //Evitamos el default (en el caso del submit es la recarga de la página)
        const formData = new FormData(e.target);          //Se cra un formData a partir de los datos del formulario
        const dataObject = Object.fromEntries(formData);  //Transformamos el formData en un objeto
        submited(dataObject);                             //Ejecutamos la función recibida por props enviandole como parámetro el objeto del nuevo paciente
        e.target.reset();                                 //Reiniciamos el formulario
    }
    return (
        <form onSubmit={onSave}>                          {/* Agregamos en el evento de submit la función de la línea 4 */}
            <label>Nombre: </label>
            <br />
            <input type="text" name="nombre" />
            <br /><br />
            <label>Apellido: </label>
            <br />
            <input type="text" name="apellido" />
            <br /><br />
            <label>Edad: </label>
            <br />
            <input type="number" name="edad" />
            <br /><br />
            <input type="submit" value="Guardar" />
        </form>
    )
}

export default NuevoPaciente
