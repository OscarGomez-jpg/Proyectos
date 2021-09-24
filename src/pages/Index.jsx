import CardRazasPerros from 'components/CardRazasPerros';
import borderCollie from "media/borderCollie.jpg"
import rhodesian from "media/rhodesian.jpg"

function Index() {
    return(
        <div>
            <main>
                <section>
                    <h1 className="titulo">Razas de perros</h1>
                    <ul className="imgsContainer">
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={borderCollie} descrpt = {"Foto de un border collie"} name= {"Border Collie"} />
                        <CardRazasPerros imag={rhodesian} descrpt = {"Foto de un rhodesian"} name= {"Rhodesian"} />
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Index;