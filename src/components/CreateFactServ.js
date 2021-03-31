import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFactServ extends Component {
	state = {
		id_servicio: '',
		id_usuario: '',
		id_cliente: '',
		id_estadofactura: '',
		editing: false
	};

	async componentDidMount() {
		if (this.props.match.params.id) {
			const res = await axios.get('http://localhost:8990/api/facturaservicio/' + this.props.match.params.id);

			this.setState({
				id_servicio: res.data.id_servicio,
				id_usuario: res.data.id_usuario,
				id_cliente: res.data.id_cliente,
				id_estadofactura: res.data.id_estadofactura,
				editing: true
			});
		}
	}
	onSubmit = async (e) => {
		e.preventDefault();
		const newFactServ = {
			id_servicio: this.state.id_servicio,
			id_usuario: this.state.id_usuario,
			id_cliente: this.state.id_cliente,
			id_estadofactura: this.state.id_estadofactura
		};
		if (this.state.editing) {
			await axios.put('http://localhost:8990/api/facturaservicio/' + this.props.match.params.id, newFactServ);
		} else {
			await axios.post('http://localhost:8990/api/facturaservicio', newFactServ);
		}

		window.location.href = '/factserv';
	};
	onInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className='col-md-6 offset-md-3'>
				<div className='card card-body'>
					<h4>Crear nueva factura de servicio</h4>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Id del servicio'
							name='id_servicio'
							required
							onChange={this.onInputChange}
							value={this.state.id_servicio}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Id del usuario'
							name='id_usuario'
							required
							onChange={this.onInputChange}
							value={this.state.id_usuario}
						/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Id del cliente'
							name='id_cliente'
							required
							onChange={this.onInputChange}
							value={this.state.id_cliente}
						/>
					</div>

					<div className='input-group mb-3'>
						<input
							type='text'
							className='form-control'
							placeholder='Id del estado de factura'
							name='id_estadofactura'
							required
							onChange={this.onInputChange}
							value={this.state.id_estadofactura}
						/>
					</div>
					<form onSubmit={this.onSubmit}>
						<br />
						<button type='submit' className='btn btn-primary'>
							Añadir
						</button>
					</form>
				</div>
			</div>
		);
	}
}
