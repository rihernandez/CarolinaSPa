import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import { call } from "../utils/api";

export default class Perfiles extends Component {
    state = {
        perfiles: [],
    };

    componentDidMount() {
        this.getPerfiles();
    }

    async getPerfiles() {
        // const res = await axios.get('http://localhost:8990/api/perfiles');
        const res = await call("get", `perfiles`);

        console.log(res);
        this.setState({ perfiles: res });
    }

    deletePerfil = async(id) => {
        await call("delete", `perfiles/` + id);

        // await axios.delete('http://localhost:8990/api/Perfiles/' + id);
        this.getPerfiles();
    };

    render() {
		return (
			<div className='row container'>
				<Link className='btn btn-primary col-3 m-1' to='/createperf'>
					Añadir perfil
				</Link>
				<table className='table table-dark'>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Id de usuario</th>
							<th scope='col'>Id de cliente</th>
							<th scope='col'>Perfil</th>
						</tr>
					</thead>
					{this.state.perfiles.map((perfil) => (
						<tbody key={perfil.id_perfil}>
							<th scope='row'>{perfil.id_perfil}</th>
							<td>{perfil.id_usuario}</td>
							<td>{perfil.id_cliente}</td>
							<td>{perfil.tipoPerfil}</td>
							<td>
								<Link className='btn btn-info' to={'/editperf/' + perfil.id_perfil}>
									Editar
								</Link>
							</td>
							<td>
								<button className='btn btn-danger' onClick={() => this.deletePerfil(perfil.id_perfil)}>
									Delete
								</button>
							</td>
						</tbody>
					))}
				</table>
			</div>
		);
	}
}