import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateFactServDeta extends Component {
	state = {
		id_facturaservicio: '',
		cantidadServicio: '',
		fechaVencimiento: '',
		cantidadMinima: '',
		editing: false
	};

	async componentDidMount() {
		if (this.props.match.params.id) {
			const res = await axios.get('http://localhost:8990/api/facturaserviciodet/' + this.props.match.params.id);

			this.setState({
				id_facturaservicio: res.data.id_facturaservicio,
				cantidadServicio: res.data.cantidadServicio,
				cantidadMinima: res.data.cantidadMinima,
				editing: true
			});
		}
	}
	onSubmit = async (e) => {
		e.preventDefault();
		const newFactServDeta = {
			id_facturaservicio: this.state.id_facturaservicio,
			cantidadServicio: this.state.cantidadServicio,
			fechaVencimiento: this.state.fechaVencimiento,
			cantidadMinima: this.state.cantidadMinima
		};
		if (this.state.editing) {
			await axios.put(
				'http://localhost:8990/api/facturaserviciodet/' + this.props.match.params.id,
				newFactServDeta
			);
		} else {
			await axios.post('http://localhost:8990/api/facturaserviciodet', newFactServDeta);
		}

		window.location.href = '/factservdeta';
	};
	onInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onChangeFechaVenc = (date) => {
		this.setState({
			fechaVencimiento: date
		});
	};

	render() {
		return (
			<div className='col-md-6 offset-md-3'>
				<div className='card card-body'>
					<h4>Añadir detalles de factura</h4>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Id de la factura del servicio'
							name='id_facturaservicio'
							required
							onChange={this.onInputChange}
							value={this.state.id_facturaservicio}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Cantidad de servicios'
							name='cantidadServicio'
							required
							onChange={this.onInputChange}
							value={this.state.cantidadServicio}
						/>
					</div>

					<div className='form-group'>
						<DatePicker
							className='form-control'
							selected={this.state.fechaVencimiento}
							onChange={this.onChangeFechaVenc}
							value={this.state.fechaVencimiento}
						/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Cantidad Minima'
							name='cantidadMinima'
							required
							onChange={this.onInputChange}
							value={this.state.cantidadMinima}
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
