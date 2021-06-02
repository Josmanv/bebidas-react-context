import React from 'react';

const Receta = ({receta}) => {

    const {strDrink, strDrinkThumb} = receta;

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className="card-body">
                    <p className="card-text">{strDrink}</p>
                    <button
                        type="button"
                        className="btn btn-block btn-outline-info"
                    >
                    Ver Receta
                    </button>
                </div>
            </div>

            
        </div>
     );
}
 
export default Receta;