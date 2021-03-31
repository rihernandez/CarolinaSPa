import React from 'react';
import { Link } from 'react-router-dom';

const EstadoFacturaTable = (props) => (
    <table className="table table-dark mt-5">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Descripcion</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            { 
                props.estadoFactura.length > 0 ? (
                props.estadoFactura.map(factura => (
                <tr key={factura.ID_EstadoFactura}>
                    <th scope="row" >{factura.ID_EstadoFactura}</th>
                    <td>{factura.Descripcion}</td>
                    <td>
                        <Link to={`/estadofactura/edit/${factura.ID_EstadoFactura}`} className="btn btn-warning"> Edit </Link>
                        <button className="btn btn-danger ml-2" onClick={(e) => {
                            e.preventDefault();
                            props.deleteFactura(factura.ID_EstadoFactura);
                            window.location.href = '/estadofactura'
                        }}> Delete 
                        </button>                    
                    </td>
                </tr>
                ))
                ) :
                (
                    <tr>
                        <td colSpan={3}> No se encontraron facturas. </td>
                    </tr>
                )
            }
        </tbody>
    </table>
)

export default EstadoFacturaTable;