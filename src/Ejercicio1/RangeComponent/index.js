import React from 'react'

const RangeComponent = ({ changed, range }) => {   /* Se obtienen los props por desestructuración */
    const onUpdate = (e) => {               //Se declara una función para pasarla en el onChange del input
        changed(e.target.value)             //La función ejecuta la función recibida por props
    }
    return (
        <>
            <label>Size:</label>
            <input
                type="range"               /*Se le agrega el tipo range */
                value={range}              /* Se le pasa el parametro del valor enviandole la prop range que recibimos de la raíz del ejercicio*/
                onChange={onUpdate}        /* Se le pasa el parametro de la función de la línea 4*/
            />
        </>
    )
}



export default RangeComponent
