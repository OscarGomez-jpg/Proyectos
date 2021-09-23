import CardRazasPerros from 'components/CardRazasPerros';
import Botones from 'components/Botones';
import borderCollie from "media/borderCollie.jpg"
import rhodesian from "media/rhodesian.jpg"
import dogIcon from "media/dog-icon.ico"

function Index() {
    return(
        <div>
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
            <main>
                <section>
                    <h1 className="titulo">Razas de perros</h1>
                    <ul className="imgsContainer">
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={rhodesian} descrpt = {"Foto de un rhodesian"} name= {"Rhodesian"} />
                    </ul>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}

export default Index;