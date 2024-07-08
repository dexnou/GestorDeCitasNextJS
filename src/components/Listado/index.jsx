import React from "react";
import Cita from "../Cita";
import './style.css';


const Listado = ({ citas, eliminarCita }) => {
    return (
      <>
        <div className="listado">
        <h2>Listado de Citas</h2>
        <div className="lista">
        
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          
        </div>
        </div>
      </>
    );
  };


export default Listado;



