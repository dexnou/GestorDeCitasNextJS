import './style.css';

const QuienesSomos = () => {
    return (
        <div className='container'>
            <h1>Quiénes Somos</h1>
            <div className='content'>
                <p>
                    En nuestra clínica veterinaria, nos dedicamos a ofrecer el mejor cuidado para tus mascotas. Nuestro equipo de profesionales apasionados trabaja con el objetivo de proporcionar atención médica de calidad y un ambiente amigable para todos nuestros pacientes.
                </p>
                <h2>Nuestra Misión</h2>
                <p>
                    Brindar atención veterinaria excepcional, comprometidos con la salud y bienestar de cada animal que atendemos.
                </p>
                <h2>Nuestra Visión</h2>
                <p>
                    Ser reconocidos como la clínica veterinaria líder en la comunidad, ofreciendo servicios innovadores y un enfoque personalizado para cada mascota.
                </p>
                <h2>Conoce a Nuestro Equipo</h2>
                <div className='team'>
                    <div className='teamMember'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IGp3-mBUYdxZKvT_XlMUXx4MmIXGsdzTaIysf3JPdD1I0pePsIMc8wfAjbDCx3qjP2o&usqp=CAU" alt="Nombre del miembro del equipo" />
                        <h3>Dr. Noah Rotbard</h3>
                        <p>Veterinario Principal</p>
                    </div>
                    <div className='teamMember'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cbMnIIj7ZnoYkNsKWIu2ux-Cp1hnAKAGFA&s" alt="Nombre del miembro del equipo" />
                        <h3>Dr. Benjamín Feldman Aguero</h3>
                        <p>Veterinario Especialista en Cirugía</p>
                    </div>
                    <div className='teamMember'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTTIZMuQvjmGhblthjtf4mVtg4_9uxifOOw&s" alt="Nombre del miembro del equipo" />
                        <h3>Dra. Amélie Torre Walsh</h3>
                        <p>Veterinaria Especialista en Cirugía</p>
                    </div>
                    <div className='teamMember'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCZs0n6QIIfGebLW_E6n1-GISJCgaJLVpxw&s" alt="Nombre del miembro del equipo" />
                        <h3>Dr. Tiago Shebar</h3>
                        <p>Veterinaria Especialista en Cirugía</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuienesSomos;
