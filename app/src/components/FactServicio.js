import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class FactServicio extends Component {
	state = {
		factServicios: []
	};

	componentDidMount() {
		this.getfactServicios();
	}

	async getfactServicios() {
		const res = await axios.get('http://localhost:8990/api/facturaservicio');
		this.setState({ factServicios: res.data });
	}

	deletefactServicio = async (id) => {
		await axios.delete('http://localhost:8990/api/facturaservicio/' + id);
		this.getfactServicios();
	};

	render() {
		return (
			<div className='row container'>
				<Link className='btn btn-primary col-3 m-1' to='/createfactserv'>
					Añadir Factura de servicio
				</Link>
				<table className='table table-dark'>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Id de Servicio</th>
							<th scope='col'>Id de Usuario</th>
							<th scope='col'>Id de Cliente</th>
							<th scope='col'>Id de Estado de Factura</th>
							<th scope='col'>Fecha de Factura</th>
							<th scope='col'>Fecha de Registro</th>
						</tr>
					</thead>
					{this.state.factServicios.map((factServicio) => (
						<tbody key={factServicio.id_facturaservicio}>
							<th scope='row'>{factServicio.id_facturaservicio}</th>
							<td>{factServicio.id_servicio}</td>
							<td>{factServicio.id_usuario}</td>
							<td>{factServicio.id_cliente}</td>
							<td>{factServicio.id_estadofactura}</td>
							<td>{factServicio.fechafactura}</td>
							<td>{factServicio.fecharegistro}</td>
							<td>
								<Link className='btn btn-info' to={'/editfactserv/' + factServicio.id_facturaservicio}>
									Editar
								</Link>
							</td>
							<td>
								<button
									className='btn btn-danger'
									onClick={() => this.deletefactServicio(factServicio.id_facturaservicio)}
								>
									Eliminar
								</button>
							</td>
						</tbody>
					))}
				</table>
				<Link className='btn btn-light' to='/factservdeta'>
					Detalles de facturas
				</Link>
			</div>
		);
	}
}
