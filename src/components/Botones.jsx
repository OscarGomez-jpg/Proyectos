function Botones({texto,icono, typeButton}) {
    return(
        <li>
            <div className="ButtonContainer">
                <button className=" button "{...typeButton}>{icono}{texto}</button>
            </div>
        </li>
    )
}

export default Botones;