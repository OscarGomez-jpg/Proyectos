function CardRazasPerros({imag, descrpt, name}){
    return(
        <li className="breadContainer">
            <div className="imgContainer">
                <img src={imag} alt={descrpt} /> 
            </div>
            <p className="dogClass">
                {name}
            </p>
            <div className="likeSection">
                <i className="far fa-heart button"></i>
                1777
                <i className="far fa-comment button"></i>
                240
                <i className="far fa-eye button"></i>
                50500
            </div>
        </li>
    )
}

export default CardRazasPerros;