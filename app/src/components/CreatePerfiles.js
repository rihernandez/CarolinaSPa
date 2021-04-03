import React, { Component } from "react";
// import axios from 'axios';
import { call } from "../utils/api";

import "react-datepicker/dist/react-datepicker.css";

export default class CreatePerfil extends Component {
    state = {
        id_usuario: "",
        id_cliente: "",
        tipoPerfil: "",
        editing: false,
    };

    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await call("get", `perfiles/` + this.props.match.params.id);

            // const res = await axios.get('http://localhost:8990/api/perfiles/' + this.props.match.params.id);

            this.setState({
                id_usuario: res.id_usuario,
                id_cliente: res.id_cliente,
                tipoPerfil: res.tipoPerfil,
                editing: true,
            });
        }
    }
    onSubmit = async(e) => {
        e.preventDefault();
        const newPerfil = {
            id_usuario: this.state.id_usuario,
            id_cliente: this.state.id_cliente,
            tipoPerfil: this.state.tipoPerfil,
        };
        if (this.state.editing) {
            await call("put", `perfiles/` + this.props.match.params.id, newPerfil);

            // await axios.put('http://localhost:8990/api/perfiles/' + this.props.match.params.id, newPerfil);
        } else {
            await call("post", `perfiles`, newPerfil);

            // await axios.post("http://localhost:8990/api/perfiles", newPerfil);
        }

        window.location.href = "/perf";
    };
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return ( <
            div className = "col-md-6 offset-md-3" >
            <
            div className = "card card-body" >
            <
            h4 > Crear Perfil < /h4>{" "} <
            div className = "form-group" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "Id del usuario"
            name = "id_usuario"
            required onChange = { this.onInputChange }
            value = { this.state.id_usuario }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "Id del cliente"
            name = "id_cliente"
            required onChange = { this.onInputChange }
            value = { this.state.id_cliente }
            />{" "} <
            /div>{" "} <
            div className = "input-group mb-3" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "Tipo de perfil"
            name = "tipoPerfil"
            required onChange = { this.onInputChange }
            value = { this.state.tipoPerfil }
            />{" "} <
            /div>{" "} <
            form onSubmit = { this.onSubmit } >
            <
            br / >
            <
            button type = "submit"
            className = "btn btn-primary" >
            Añadir { " " } <
            /button>{" "} <
            /form>{" "} <
            /div>{" "} <
            /div>
        );
    }
}