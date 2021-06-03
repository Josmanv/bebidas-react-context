import React, {useContext} from 'react';
import {ModalContext} from '../context/ModalContext';

const Receta = ({receta}) => {

    //Extraer los valores del context
    const {guardarIdReceta} = useContext(ModalContext);

    const {strDrink, strDrinkThumb, idDrink} = receta;

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className="card-body">
                    <p className="card-text">{strDrink}</p>
                    <button
                        type="button"
                        className="btn btn-block btn-outline-info"
                        onClick={() => {
                            guardarIdReceta(idDrink)
                        }}
                    >
                    Ver Receta
                    </button>
                </div>
            </div>

            
        </div>
     );
}
 
export default Receta;