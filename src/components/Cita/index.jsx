import {style} from './style.jsx'
import BotonEliminar from '../BotonEliminar'
import CardText from '../CardText'

const Cita = ({ cita, eliminarCita }) => {

    const handleEliminar = () => {
        eliminarCita(cita.id);
    };

    return (
        <div style={style.cita}>
            <CardText titulo="Mascota" descripcion={cita.mascota}/>
            <CardText titulo="Dueño" descripcion={cita.dueño}/>
            <CardText titulo="Fecha" descripcion={cita.fecha}/>
            <CardText titulo="Hora" descripcion={cita.hora}/>
            <CardText titulo="Síntomas" descripcion={cita.sintomas}/>
            <BotonEliminar onclick={handleEliminar}/>
        </div>
    )
};

export default Cita;