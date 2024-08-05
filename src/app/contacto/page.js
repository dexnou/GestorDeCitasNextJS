import '../../pages/Contacto/style.css'
const Contacto = () => {
    return (
        <div>
            <div className="container">
                <h1>Contacto</h1>
                <div className="contactInfo">
                    <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
                    <p><strong>Teléfono:</strong> +123 456 789</p>
                    <p><strong>Email:</strong> contacto@veterinario.com</p>
                </div>
            </div>
            
            <div class="form-container">
                <form class="form">
                    <div class="form-group">
                        <label for="email">Email de la Compañía</label>
                        <input required="" name="email" id="email" type="text"/>
                    </div>
                    <div class="form-group">
                        <label for="textarea">¿Como podemos ayudarte?</label>
                        <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          
                        </textarea>
                    </div>
                    <button type="submit" class="form-submit-btn">Submit</button>
                </form>
            </div>
        </div>
        
    );
};
export default Contacto;
