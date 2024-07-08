import Formulario from "../../components/Formulario";
import Listado from '../../components/Listado';

const MainView = (props) => {
    return (
        <>
        <div className='subDiv'>
            <Formulario agregarCita={props.agregarCita} />
        </div>
        <div className='subDiv'>
            <Listado citas={props.citas} setCitas={props.setCitas} eliminarCita={props.eliminarCita} />
        </div>
        </>
    )
        
}

export default MainView;

