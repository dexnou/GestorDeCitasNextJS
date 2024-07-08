import React from 'react';
import { style } from "./style";

const Input = ({ tipo, contenidoAPoner, name, label }) => {
    const handleFocus = (event) => {
            event.target.style.opacity = '1';
    };

    return (
        <>
                <input
                    type={tipo}
                    ref={contenidoAPoner}
                    name={name}
                    required
                    style={{ ...style.input, ...style.inputDate }}
                    onFocus={handleFocus}
                />
            <label>{label}</label>
        </>
    )
};

export default Input;


