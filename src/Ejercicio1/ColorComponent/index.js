import React from 'react'

const ColorComponent = ({ changed, color }) => { /* Se obtienen los props por desestructuración */
    const onUpdate = (e) => {               //Se declara una función para pasarla en el onChange del input
        changed(e.target.value)             //La función ejecuta la función recibida por props
    }
    return (
        <>
            <label>Color:</label>
            <input
                type="color"               /*Se le agrega el tipo color */
                value={color}              /* Se le pasa el parametro del valor enviandole la prop color que recibimos de la raíz del ejercicio*/
                onChange={onUpdate}        /* Se le pasa el parametro de la función de la línea 4*/
            />
        </>
    )
}

export default ColorComponent
