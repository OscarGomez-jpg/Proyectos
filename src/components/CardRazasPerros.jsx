import React from 'react'
import {Link} from 'react-router-dom';

const CardRazasPerros = ({imag, descrpt, name}) => {
    return (
        <div>
            <li className="breadContainer">
                <Link to='/RhodesianInfo'>
                    <div className="imgContainer">
                        <img src={imag} alt={descrpt} /> 
                    </div>
                </Link>
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
        </div>
    )
}


export default CardRazasPerros;