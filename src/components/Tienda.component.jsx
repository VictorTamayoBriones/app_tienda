import React from 'react';
import Productos from './Productos.component';

const Tienda = ({productos, aĆ±adirProductoAlCarrito}) => {
    return (  
        <div>
            <h1>Tienda</h1>
            <Productos productos={productos} aĆ±adirProductoAlCarrito={aĆ±adirProductoAlCarrito}/>
        </div>
    );
}
 
export default Tienda;