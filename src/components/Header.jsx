import dogIcon from "media/dog-icon.ico"
import Botones from 'components/Botones';

const Header = () =>{
    return(
        <header>
            <ul className="navBar">
                <li>
                    <div className="icon">
                        <img src={dogIcon} alt="icono perro"/>
                    </div>
                </li>
                <Botones icono={<i className="fas fa-plus"></i>} texto={" Nuevo Post"} />
                <li>
                    <div className="srchBar">
                        <input type="text" placeholder="Ingrese la raza..." />
                        <i className="fas fa-search button iconoBusqueda"></i>
                    </div>
                </li>
                <li>
                    <div>
                        <button className=" button secondaryButton">Iniciar Sesión</button>
                        <button className=" button secondaryButton">Registrarse</button>
                    </div>
                </li>
            </ul>     
        </header>
    )
}

export default Header;