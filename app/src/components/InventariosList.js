import React, { Component } from "react";
// import axios from 'axios'
import { call } from "../utils/api";

import { Link } from "react-router-dom";

class InventariosList extends Component {
    state = {
        inventarios: [],
    };

    componentDidMount() {
        this.getInventarios();
    }

    getInventarios = async() => {
        const res = await call("get", `inventario`);

        // const res = await axios.get('http://localhost:8990/api/inventario');
        this.setState({
            inventarios: res,
        });
    };

    delete = async(id) => {
        await call("delete", `inventario/` + id);
        // axios.delete('http://localhost:8990/api/inventario/' + id);
        window.location.href = "/inventarios";
    };

   render() {
        return (
            <div className="row">
                <table className="table table-hover table-sm">
                    <thead>
                        <tr>
                            <th>Proveedor</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Cantidad Minima</th>
                            <th>Fecha de Entrada</th>
                            <th>Fecha de Vencimiento</th>
                            <th colSpan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.inventarios.map(inventario => (
                                <tr
                                    key={inventario.id_Inventario}
                                >
                                    <td>{inventario.Proveedor.proveedor}</td>
                                    <td>{inventario.Producto.nombreProducto}</td>
                                    <td>{inventario.cantidad}</td>
                                    <td>{inventario.cantidadMinima}</td>
                                    <td>{inventario.fechaEntrada}</td>
                                    <td>{inventario.fechaVencimiento}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-primary" to={"/edit-inventario/" + inventario.id_Inventario}>
                                            Editar
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => { this.delete(inventario.id_Inventario) }}>
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default InventariosList;