import React, { Component } from "react";
// import axios from 'axios';
import { call } from "../utils/api";

import { Link } from "react-router-dom";

export default class Servicio extends Component {
    state = {
        servicios: [],
    };

    componentDidMount() {
        this.getServicios();
    }

    async getServicios() {
        const res = await call("get", `servicios`);

        // const res = await axios.get('http://localhost:8990/api/servicios');
        this.setState({ servicios: res });
    }

    deleteServicio = async(id) => {
        await call("delete", `servicios/` + id);

        // await axios.delete("http://localhost:8990/api/servicios/" + id);
        this.getServicios();
    };

 render() {
		return (
			<div className='row container'>
				<Link className='btn btn-primary col-3 m-1' to='/createserv'>
					Añadir servicio
				</Link>
				<table className='table table-dark '>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Servicio</th>
							<th scope='col'>Descripcion</th>
							<th scope='col'>Precio</th>
						</tr>
					</thead>
					{this.state.servicios.map((servicio) => (
						<tbody key={servicio.id_servicio}>
							<th scope='row'>{servicio.id_servicio}</th>
							<td>{servicio.servicio}</td>
							<td>{servicio.descripcion}</td>
							<td>{servicio.precio}</td>
							<td>
								<Link className='btn btn-info' to={'/editserv/' + servicio.id_servicio}>
									Editar
								</Link>
							</td>
							<td>
								<button
									className='btn btn-danger'
									onClick={() => this.deleteServicio(servicio.id_servicio)}
								>
									Eliminar
								</button>
							</td>
						</tbody>
					))}
				</table>
			</div>
		);
	}
}