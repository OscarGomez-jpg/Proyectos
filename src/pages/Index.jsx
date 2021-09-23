import CardRazasPerros from 'components/CardRazasPerros';
import Header from 'components/Header';
import borderCollie from "media/borderCollie.jpg"
import rhodesian from "media/rhodesian.jpg"


function Index() {
    return(
        <div>
            <Header />
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