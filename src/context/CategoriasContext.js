import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

// Crear el context 

export const CategoriasContext = createContext();

// Provider es donde se encuantran las funciones y state

const CategoriasProvider = (props)=>{

    // Crear el state del context

    const [categorias, setCategoria] = useState([]);

    // Llamada a la api

    useEffect(()=>{
        const obtenerCategorias = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            setCategoria(categorias.data.drinks);
        }
        obtenerCategorias();
    },[]);


    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;