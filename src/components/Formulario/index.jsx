import Cita from '../../components/Cita'
import './style.css';
import React, {useRef, } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';

const Formulario = (props) => {
    const mascotaRef = useRef();
    const dueñoRef = useRef();
    const fechaRef = useRef();
    const horaRef = useRef();
    const sintomasRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const mascota = mascotaRef.current.value.trim();
        const dueño = dueñoRef.current.value.trim();
        const fecha = fechaRef.current.value.trim();
        const hora = horaRef.current.value.trim();
        const sintomas = sintomasRef.current.value.trim();
        //Trim para eliminar espacios al inicio y al final
        // Por si algun campo está vacio
        if (!mascota || !dueño || !fecha || !hora || !sintomas) {
            alert('Por favor completa todos los campos');
            return;
        }

        const regex = /[a-zA-Z]/;
        if(!regex.test(mascota) || !regex.test(dueño) || !regex.test(sintomas)){
            alert('Los campos de nombre de mascota, nombre de dueño y sintomas deben contener por lo menos una letra');
            return;
        }


        // Convertir la fecha y hora ingresadas en milisegundos
        const fechaSeleccionada = new Date(fecha + 'T' + hora);
        const ahora = new Date();

        // Comparar la fecha seleccionada con la fecha actual
        if (fechaSeleccionada <= ahora) {
            alert('La fecha y hora deben ser futuras');
            return;
        }

        const id = uuidv4();

        const nuevaCita = {
            id: id,
            mascota: mascota,
            dueño: dueño,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };

        // Resetea los valores de los campos
        if(props.agregarCita(nuevaCita)){
            mascotaRef.current.value = '';
            dueñoRef.current.value = '';
            fechaRef.current.value = '';
            horaRef.current.value = '';
            sintomasRef.current.value = '';
        }
        
    };

    return (
        <>
        <div className='formulario'>
            <h2>Saludos</h2>
            <div className="form-box">
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <Input tipo={"text"} contenidoAPoner={mascotaRef} name={"mascota"} label={"Nombre de la Mascota"}/>
                    </div>
                    <div className="user-box">
                        <Input tipo={"text"} contenidoAPoner={dueñoRef} name={"dueño"} label={"Nombre del dueño"}/>
                    </div>
                    <div className="user-box">
                        <Input tipo={"date"} contenidoAPoner={fechaRef} name={"fecha"} label={"Fecha"}/>
                    </div>
                    <div className="user-box">
                        <Input tipo={"time"} contenidoAPoner={horaRef} name={"hora"} label={"Hora"}/>
                    </div>
                    <div className="user-box">
                        <Input tipo={"text"} contenidoAPoner={sintomasRef} name={"sintomas"} label={"Síntomas"}/>
                    </div>
                    <center>
                        <a href="#" onClick={handleSubmit}>
                            SEND
                            <span></span>
                        </a>
                    </center>
                </form>
            </div>
        </div>
        </>
    );
};


export default Formulario;