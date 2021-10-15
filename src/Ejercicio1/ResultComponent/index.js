import React from 'react'

const ResultComponent = ({ color, range, text }) => {/* Se obtienen los props por desestructuración */
    return (
        <h1
            style={{                        //Al h1 se le agrega el parámetro de style
                color: color,               //Se le agrega la propiedad de CSS color, pasandole como valor el color recibido por proos
                fontSize: range + 'px'      //Se le agrega la propiedad de CSS font-size(en react se usa camelCase), pasandole como valor el range recibido por proos
            }}
        >
            {text}                         {/* Se muestra el texto recibido en las props */}
        </h1>
    )
}

export default ResultComponent
