import './App.css';
import borderCollie from "./media/borderCollie.jpg"
import rhodesian from "./media/rhodesian.jpg"
import dogIcon from "./media/dog-icon.ico"

function App() {
  return (
    <div className="App">
        <header>
            <ul class="navBar">
                <li>
                    <div class="icon">
                        <img src={dogIcon} alt="icono perro"/>
                    </div>
                </li>
                <li>
                    <div class="ButtonContainer">
                        <button class=" button mainButton"><i class="fas fa-plus"></i> Nuevo Post</button>
                    </div>
                </li>
                <li>
                    <div class="srchBar">
                        <input type="text" placeholder="Ingrese la raza..." />
                        <i class="fas fa-search button iconoBusqueda"></i>
                    </div>
                </li>
                <li>
                    <div>
                        <button class=" button secondaryButton">Iniciar Sesión</button>
                        <button class=" button secondaryButton">Registrarse</button>
                    </div>
                </li>
            </ul>     
        </header>
        <main>
            <section>
                <h1 class="titulo">Razas de perros</h1>
                <ul class="imgsContainer">
                    <cardRazasPerros prop={borderCollie}/>
                    <li class="breadContainer">
                        <div class="imgContainer">
                            <img src={rhodesian} alt="Foto de un rhodesian"/>
                        </div>
                        <p class="dogClass">
                            Rhodesian
                        </p>
                        <div class="likeSection">
                            <i class="far fa-heart button"></i>
                            1227
                            <i class="far fa-comment button"></i>
                            220
                            <i class="far fa-eye button"></i>
                            90000
                        </div>
                    </li>
                </ul>
            </section>
            <section></section>
        </main>
        <footer></footer>
    </div>
  );
}

function cardRazasPerros(prop){
    return(
        <li class="breadContainer">
            <div class="imgContainer">
                <img src={prop} alt="Foto de un Border Collie"/> 
            </div>
            <p class="dogClass">
                Border Collie
            </p>
            <div class="likeSection">
                <i class="far fa-heart button"></i>
                1777
                <i class="far fa-comment button"></i>
                240
                <i class="far fa-eye button"></i>
                50000
            </div>
        </li>
    )
}

export default App;
