import Link from "next/link";
import './style.css';

const NavBar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/Nosotros">Nosotros</Link>
            <Link href="/reservas">Reservas</Link>
            <Link href="/contacto">Contacto</Link>
        </div>
    );
    
};

export default NavBar