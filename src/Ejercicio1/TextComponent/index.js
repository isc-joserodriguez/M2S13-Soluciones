import React from 'react'

const TextComponent = ({ changed, text }) => {   /* Se obtienen los props por desestructuración */
    const onUpdate = (e) => {               //Se declara una función para pasarla en el onChange del input
        changed(e.target.value)             //La función ejecuta la función recibida por props
    }
    return (
        <>
            <label>Text:</label>
            <input
                type="text"               /*Se le agrega el tipo text */
                value={text}              /* Se le pasa el parametro del valor enviandole la prop text que recibimos de la raíz del ejercicio*/
                onChange={onUpdate}        /* Se le pasa el parametro de la función de la línea 4*/
            />
        </>
    )
}

export default TextComponent
