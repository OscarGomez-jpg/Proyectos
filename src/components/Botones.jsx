function Botones({texto,icono}) {
    return(
        <li>
            <div className="ButtonContainer">
                <button className=" button mainButton">{icono}{texto}</button>
            </div>
        </li>
    )
}

export default Botones;