import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idReceta, guardarIdReceta] = useState(null);
    const [informacion, guardarRecetaDrinks] = useState({});

     // Una vez que tenemos una receta, Llamada a la api

     useEffect(()=>{
        const obtenerFullDrink = async () =>{
            if(!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const infoRecetas = await axios.get(url);
            guardarRecetaDrinks(infoRecetas.data.drinks);
            console.log(infoRecetas.data.drinks)
        }
        obtenerFullDrink();
    },[idReceta]);

    return(
        <ModalContext.Provider
        value={{
            informacion,
            guardarIdReceta
        }}
        >
        
        {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;