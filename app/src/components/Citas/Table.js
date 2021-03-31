import React from 'react';
import { Link } from 'react-router-dom';

const EstadoFacturaTable = (props) => (
    <table className="table table-dark mt-5">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Servicio</th>
            <th scope="col">Estado de cita</th>
            <th scope="col">Cliente</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            { 
                props.citas.length > 0 ? (
                props.citas.map(cita => (
                <tr key={cita.ID_Cita}>
                    <th scope="row" >{cita.ID_Cita}</th>
                    <td>{cita.servicio.servicio ?? ''}</td>
                    <td>{cita.EstadoCitum.Descripcion ?? null}</td>
                    <td>{cita.Cliente.Cedula ?? null}</td>
                    <td>
                        <Link to={`/citas/edit/${cita.ID_Cita}`} className="btn btn-warning"> Edit </Link>
                        <button className="btn btn-danger ml-2" onClick={(e) => {
                            e.preventDefault();
                            props.deleteCita(cita.ID_Cita);
                            window.location.href = '/citas'
                        }}> Delete
                        </button>
                    </td>
                </tr>
                ))
                ) :
                (
                    <tr>
                        <td colSpan={3}> No se encontraron citas. </td>
                    </tr>
                )
            }
        </tbody>
    </table>
)

export default EstadoFacturaTable;