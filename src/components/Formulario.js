import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';
import Error from './Error';


const Formulario = () => {

const {categorias} = useContext(CategoriasContext);
const {buscarRecetas, guardarConsultar, error} = useContext(RecetasContext);

const [busqueda, setBusqueda] = useState({
    nombre:'',
    categoria:''
});

const obtenerDatosReceta = e => {
    setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    });
}

let  componente;
if(error){
  componente = <Error mensaje="Introduce Ingredientes y categorías" />
}

    return ( 
        <form 
        className="col-12"
        onSubmit={e =>{
            e.preventDefault();
            buscarRecetas(busqueda);
            guardarConsultar(true);
        }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4 mt-4">
                    <input 
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por ingrediente"
                    onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4 mt-4">
                    <select
                    name="categoria"
                    className="form-control"
                    onChange={obtenerDatosReceta}
                    >
                    <option value="">-- Selecciona Categoría --</option>
                    {categorias.map(categoria => (
                        <option
                        value={categoria.strCategory}
                        key={categoria.strCategory}
                        >{categoria.strCategory}</option>
                    ))}
                    </select>
                </div>
                <div className="col-md-4 mt-4">
                    <input 
                    type="submit"
                    className="btn btn-block btn-outline-info"
                    value="Buscar Bebidas"
                    />
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-md-12">
                    {componente}
                </div>
            </div>

        </form> 
        );
}
 
export default Formulario;