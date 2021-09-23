import 'App.css';
import CardRazasPerros from 'components/CardRazasPerros';
import borderCollie from "media/borderCollie.jpg"
import rhodesian from "media/rhodesian.jpg"
import dogIcon from "media/dog-icon.ico"

function App() {
  return (
    <div className="App">
        <header>
            <ul className="navBar">
                <li>
                    <div className="icon">
                        <img src={dogIcon} alt="icono perro"/>
                    </div>
                </li>
                <li>
                    <div className="ButtonContainer">
                        <button className=" button mainButton"><i className="fas fa-plus"></i> Nuevo Post</button>
                    </div>
                </li>
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
  );
}




export default App;
