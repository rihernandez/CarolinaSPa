import React from 'react';
import { Link } from 'react-router-dom';

const EstadoFacturaTable = (props) => (
    <table className="table table-dark mt-5">
        <thead>
        <tr>
            <th scope="col"> Id </th>
            <th scope="col"> Descripcion </th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            { 
                props.estadoCitas.length > 0 ? (
                props.estadoCitas.map(estadoCita => (
                <tr key={estadoCita.ID_EstadoCita}>
                    <th scope="row" >{estadoCita.ID_EstadoCita}</th>
                    <td>{estadoCita.Descripcion ?? ''}</td>
                    <td>
                        <Link to={`/estadocita/edit/${estadoCita.ID_EstadoCita}`} className="btn btn-warning"> Edit </Link>
                        <button className="btn btn-danger ml-2" onClick={(e) => {
                            e.preventDefault();
                            props.deleteEstadoCita(estadoCita.ID_EstadoCita);
                            window.location.href = '/estadocita'
                        }}> Delete
                        </button>
                    </td>
                </tr>
                ))
                ) :
                (
                    <tr>
                        <td colSpan={3}> No se encontraron estados de cita. </td>
                    </tr>
                )
            }
        </tbody>
    </table>
)

export default EstadoFacturaTable;