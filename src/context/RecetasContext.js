import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, guardarRecetas] = useState([]);
    const [busquedaReceta, buscarRecetas] = useState({
        nombre:'',
        categoria:''
    });

    const [error, seterror] = useState(false);
    const [consultar, guardarConsultar] = useState(false);

    const {nombre, categoria} = busquedaReceta;

    useEffect(()=>{
        if(consultar) {
            if(nombre === '' || categoria === ''){
                seterror(true);
                return; 
            }
            else{
                seterror(false);
            }
            const obtenerBebidasPorIngrediente = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const bebidasPorIngrediente = await axios.get(url);
                //console.log(bebidasPorIngrediente.data.drinks);
                guardarRecetas(bebidasPorIngrediente.data.drinks);
            }
            obtenerBebidasPorIngrediente();
        }

    },[busquedaReceta]);

    return ( 
        <RecetasContext.Provider
            value={{
                recetas,
                error,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;