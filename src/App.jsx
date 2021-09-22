import './App.css';
import borderCollie from "./media/borderCollie.jpg"
import rhodesian from "./media/rhodesian.jpg"
import dogIcon from "./media/dog-icon.ico"

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
                    <CardRazasPerros img={borderCollie} descrip={"Foto de un border collie"} />
                    <CardRazasPerros img={rhodesian} descrip={"Foto de un rhodesian"} />
                </ul>
            </section>
            <section></section>
        </main>
        <footer></footer>
    </div>
  );
}

function CardRazasPerros(img, descrip){
    return(
        <li className="breadContainer">
            <div className="imgContainer">
                <img src={img} alt={descrip}/> 
            </div>
            <p className="dogClass">
                Border Collie
            </p>
            <div className="likeSection">
                <i className="far fa-heart button"></i>
                1777
                <i className="far fa-comment button"></i>
                240
                <i className="far fa-eye button"></i>
                50000
            </div>
        </li>
    )
}


export default App;
