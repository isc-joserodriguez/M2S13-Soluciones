import React, { useState } from 'react'                 //importamos useState para poder trabajar con el estado de los componentes
import ColorComponent from './ColorComponent';          //importamos el componente para el color
import RangeComponent from './RangeComponent';          //importamos el componente para el tamaño
import TextComponent from './TextComponent';            //importamos el componente para el texto
import ResultComponent from './ResultComponent';        //importamos el componente para el resultado

const Ejercicio1 = () => {
    const [color, setColor] = useState('#000000');      //Inicializamos el estado de color
    const [range, setRange] = useState('16');           //Inicializamos el estado de tamaño
    const [text, setText] = useState('Mensaje');        //Inicializamos el estado de texto

    const changeColor = (newColor) => setColor(newColor); //Arrow function que recibe un nuevo color y usa el setColor para guardarlo en el estado
    const changeRange = (newRange) => setRange(newRange); //Arrow function que recibe un nuevo tamaño y usa el setRange para guardarlo en el estado
    const changeText = (newText) => setText(newText);     //Arrow function que recibe un nuevo texto y usa el setText para guardarlo en el estado
    return (
        <div>
            <ColorComponent changed={changeColor} color={color} /> {/* Se usa el componente ColorComponent enviandole como props la función para cambiar el color y el valor del color */}
            <br /> <br />
            <RangeComponent changed={changeRange} range={range} /> {/* Se usa el componente RangeComponent enviandole como props la función para cambiar el range y el valor del range */}
            <br /> <br />
            <TextComponent changed={changeText} text={text} />     {/* Se usa el componente TextComponent enviandole como props la función para cambiar el texto y el valor del texto */}
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> {/* Saltos de línea */}
            <ResultComponent
                color={color}
                range={range}
                text={text}
            />                                                     {/* Se usa el componente ResultComponent enviandole como props los valores del estado*/}
        </div>
    )
}

export default Ejercicio1
