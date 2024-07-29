import Link from "next/link";
import './style.css';

const skibidiImages = {
    home: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHmZBxIkxE_eRbPAbggugQBYEoY3lLAxpGw&s",
    quienes: "https://media.tycsports.com/files/2024/06/13/729224/skibidi-toilet-season-1-full-screen_416x555.webp",
    reservas: "https://static.wikia.nocookie.net/powerpuff-base/images/5/57/Titan_Speakerpuff_Man.png",
    contacto: "https://static.wikia.nocookie.net/fcoc-vs-battles/images/6/61/GToilet_BetterPNG.png"
  };
  
  const NavBar = () => {
    return (
      <div className="navbar">
        <Link href="/" className="nav-item">
          <img src={skibidiImages.home} alt="Home" />
          <span>Home</span>
        </Link>
        <Link href="/Nosotros" className="nav-item">
          <img src={skibidiImages.quienes} alt="Quiénes Somos" />
          <span>Quiénes Somos</span>
        </Link>
        <Link href="/Reservas" className="nav-item">
          <img src={skibidiImages.reservas} alt="Reservas" />
          <span>Reservas</span>
        </Link>
        <Link href="/Contacto" className="nav-item">
          <img src={skibidiImages.contacto} alt="Contacto" />
          <span>Contacto</span>
        </Link>
      </div>


    );
  };
export default NavBar