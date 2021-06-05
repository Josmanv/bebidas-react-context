import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-warning" role="alert">
            {mensaje}
        </div>
     );
}
 
export default Error;