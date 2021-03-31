import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class FactServDeta extends Component {
	state = {
		factServDetalles: []
	};

	componentDidMount() {
		this.getfactServDetalles();
	}

	async getfactServDetalles() {
		const res = await axios.get('http://localhost:8990/api/facturaserviciodet');
		this.setState({ factServDetalles: res.data });
	}
	deletefactServdeta = async (id_facturaserviciodet) => {
		await axios.delete('http://localhost:8990/api/facturaserviciodet/' + id_facturaserviciodet);
		this.getfactServDetalles();
	};

	render() {
		return (
			<div className='row container'>
				<Link className='btn btn-primary col-3 m-1' to='/createfactdeta'>
					Agregar datos de factura
				</Link>
				<table className='table table-dark'>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Id de Factura de servicio</th>
							<th scope='col'>Cantidad de servicios</th>
							<th scope='col'>Fecha de vencimiento</th>
							<th scope='col'>Cantidad Minima</th>
							<th scope='col'>Fecha de Entrada</th>
						</tr>
					</thead>
					{this.state.factServDetalles.map((factServdetalle) => (
						<tbody key={factServdetalle.id_facturaserviciodet}>
							<th scope='row'>{factServdetalle.id_facturaserviciodet}</th>
							<td>{factServdetalle.id_facturaservicio}</td>
							<td>{factServdetalle.cantidadServicio}</td>
							<td>{factServdetalle.fechaVencimiento}</td>
							<td>{factServdetalle.cantidadMinima}</td>
							<td>{factServdetalle.fechaEntrada}</td>
							<td>
								<Link
									className='btn btn-info'
									to={'/editfactdeta/' + factServdetalle.id_facturaserviciodet}
								>
									Editar
								</Link>
							</td>
							<td>
								<button
									className='btn btn-danger'
									onClick={() => this.deletefactServdeta(factServdetalle.id_facturaserviciodet)}
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
