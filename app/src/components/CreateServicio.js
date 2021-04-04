import React, { Component } from "react";
// import axios from 'axios';
import { call } from "../utils/api";

import "react-datepicker/dist/react-datepicker.css";

export default class CreateServicio extends Component {
    state = {
        servicio: "",
        descripcion: "",
        precio: "",
        editing: false,
    };

    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await call("get", `servicios` + this.props.match.params.id);

            // const res = await axios.get('http://localhost:8990/api/servicios/' + this.props.match.params.id);
            console.log(res);

            this.setState({
                servicio: res.servicio,
                descripcion: res.descripcion,
                precio: res.precio,
                editing: true,
            });
        }
    }
    onSubmit = async(e) => {
        e.preventDefault();
        const newServicio = {
            servicio: this.state.servicio,
            descripcion: this.state.descripcion,
            precio: this.state.precio,
        };
        if (this.state.editing) {
            await call("put", `servicios/` + this.props.match.params.id, newServicio);
            // await axios.put('http://localhost:8990/api/servicios/' + this.props.match.params.id, newServicio);
        } else {
            await call("post", `servicios`, newServicio);

            // await axios.post('http://localhost:8990/api/servicios', newServicio);
        }

        window.location.href = "/serv";
    };
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

render() {
		return (
			<div className='col-md-6 offset-md-3'>
				<div className='card card-body'>
					<h4>Crear Servicio</h4>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							placeholder='Nombre del Servicio'
							name='servicio'
							required
							onChange={this.onInputChange}
							value={this.state.servicio}
						/>
					</div>

					<div className='form-group'>
						<textarea
							className='form-control'
							placeholder='Descripcion del servicio'
							name='descripcion'
							required
							onChange={this.onInputChange}
							value={this.state.descripcion}
						/>
					</div>

					<div className='input-group mb-3'>
						<input
							type='text'
							className='form-control'
							aria-label='Dollar amount (with dot and two decimal places)'
							placeholder='precio del servicio'
							name='precio'
							required
							onChange={this.onInputChange}
							value={this.state.precio}
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