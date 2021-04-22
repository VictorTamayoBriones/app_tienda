import React from 'react';
import Productos from './Productos.component';

const Tienda = ({productos, añadirProductoAlCarrito}) => {
    return (  
        <div>
            <h1>Tienda</h1>
            <Productos productos={productos} añadirProductoAlCarrito={añadirProductoAlCarrito}/>
        </div>
    );
}
 
export default Tienda;