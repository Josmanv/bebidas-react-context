import React from 'react';

const Formulario = () => {
    return ( 
        <form className="col-12">
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
                    />
                </div>
                <div className="col-md-4 mt-4">
                    <select
                    name="categoria"
                    className="form-control"
                    >
                    <option value="">-- Selecciona Categoría --</option>
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

        </form> 
        );
}
 
export default Formulario;