import {style} from "./style";

const CitaText = ({titulo, descripcion}) => {
    return(
        <p><span style={style.titulo}>{titulo}:</span> <span style={style.desc}>{descripcion}</span></p>
    )
};

export default CitaText;
