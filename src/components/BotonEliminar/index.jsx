import {style} from './style'
import React from 'react'

const BotonEliminar = ({onclick}) => {
    return (
        <button style={style.botonEliminar} onClick={onclick}>Eliminar X</button>
    )
};

export default BotonEliminar;