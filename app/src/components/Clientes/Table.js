import React from 'react';
import { Link } from 'react-router-dom';

const EstadoFacturaTable = (props) => (
    <table className="table table-dark mt-5">
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Cedula</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Tel. Casa</th>
            <th scope="col">Celular</th>
            <th scope="col">Dirección</th>
            <th scope="col">Email</th>
            <th scope="col">Cantidad de visitas</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            { 
                props.clientes.length > 0 ? (
                props.clientes.map(clientes => (
                <tr key={clientes.ID_Cliente}>
                    <th scope="row" >{clientes.ID_Cliente}</th>
                    <td>{clientes.Nombre ?? ''}</td>
                    <td>{clientes.Apellidos ?? ''}</td>
                    <td>{clientes.Cedula ?? ''}</td>
                    <td>{clientes.FechaNacimiento ?? ''}</td>
                    <td>{clientes.TelefonoCasa ?? ''}</td>
                    <td>{clientes.Celular ?? ''}</td>
                    <td>{clientes.Direccion ?? ''}</td>
                    <td>{clientes.Email ?? ''}</td>
                    <td>{clientes.CantidadVisitas ?? ''}</td>
                    <td>
                        <Link to={`/clientes/edit/${clientes.ID_Cliente}`} className="btn btn-warning"> Edit </Link>
                        <button className="btn btn-danger ml-2" onClick={(e) => {
                            e.preventDefault();
                            props.deleteCliente(clientes.ID_Cliente);
                            window.location.href = '/clientes'
                        }}> Delete
                        </button>
                    </td>
                </tr>
                ))
                ) :
                (
                    <tr>
                        <td colSpan={3}> No se encontraron clientes. </td>
                    </tr>
                )
            }
        </tbody>
    </table>
)

export default EstadoFacturaTable;