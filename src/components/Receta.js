import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 20,
    },
    scroll: { 
        maxHeight: '500px', 
        overflowY: 'scroll', 
        overflowX: 'none' 
    },
}));

const Receta = ({receta}) => {

    // Co figuración del modal de material ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    //Extraer los valores del context
    const { informacion, guardarIdReceta, guardarRecetaDrinks} = useContext(ModalContext);

    // const {strDrink, strDrinkThumb, idDrink} = informacion;ç

    //Muestra y formatea los ingredientes

    const mostrarIngredientes = info =>{
        let ingredientes = [];
        for(let i=1; i<16; i++){
            if(info[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{info[`strIngredient${i}`]} - {info[`strMeasure${i}`]}</li>
                );
            }
        }
        return ingredientes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <p className="card-text">{receta.strDrink}</p>
                    <button
                        type="button"
                        className="btn btn-block btn-outline-info"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    >
                    Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarRecetaDrinks({});
                            handleClose();
                        }}
                     >
                         <div style={modalStyle} className={classes.paper}>
                            <div className={ classes.scroll }>
                                <h2>{informacion.strDrink}</h2>
                                <h3 className="mt-4">Instrucciones</h3>
                                <p>
                                    {informacion.strInstructions}
                                </p>

                                <img className="img-fluid my-4" src={informacion.strDrinkThumb} />

                                <h3>Ingredientes y Cantidades</h3>
                                <ul>
                                    {mostrarIngredientes(informacion)}
                                </ul>
                            </div>
                         </div>
                     </Modal>
                    
                </div>
            </div>

            
        </div>
     );
}
 
export default Receta;