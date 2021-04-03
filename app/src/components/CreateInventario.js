import React, { Component } from "react";
// import axios from 'axios'
import { call } from "../utils/api";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateInventario extends Component {
    state = {
        productos: [],
        proveedores: [],
        proveedor_id: "",
        producto_id: "",
        cantidad: "",
        cantidadMin: "",
        fechaEnt: "",
        fechaVen: "",
        editing: false,
        id_Inventario: "",
    };

    async componentDidMount() {
        this.getResult();

        if (this.props.match.params.id) {
            const res = await call("get", `inventario/` + this.props.match.params.id);

            // const res = await axios.get(
            //     "http://localhost:8990/api/inventario/" + this.props.match.params.id
            // );
            this.setState({
                id_Inventario: this.props.match.params.id,
                producto_id: res.id_producto,
                proveedor_id: res.id_proveedor,
                cantidad: res.cantidad,
                cantidadMin: res.cantidadMinima,
                fechaEnt: new Date(res.fechaEntrada),
                fechaVen: new Date(res.fechaVencimiento),
                editing: true,
            });
        }
    }

    getResult = async() => {
        //prod = productos
        const prod = await call("get", `producto`);
        // const prod = await axios.get("http://localhost:8990/api/producto");
        //prov = proveedores
        const prov = await call("get", `proveedor`);

        // const prov = await axios.get("http://localhost:8990/api/proveedor");

        this.setState({
            productos: prod,
            proveedores: prov,
            proveedor_id: prov[0].id_Proveedor,
            producto_id: prod[0].id_Producto,
        });
    };

    onSubmit = async(e) => {
        e.preventDefault();
        const newInventario = {
            id_proveedor: this.state.proveedor_id,
            id_producto: this.state.producto_id,
            cantidad: this.state.cantidad,
            cantidadMinima: this.state.cantidadMin,
            fechaEntrada: this.state.fechaEnt,
            fechaVencimiento: this.state.fechaVen,
        };
        if (this.state.editing) {
            await call(
                "put",
                `inventario/` + this.state.id_Inventario,
                newInventario
            );

            // await axios.put(
            //     "http://localhost:8990/api/inventario/" + this.state.id_Inventario,
            //     newInventario
            // );
            window.location.href = "/inventarios";
        } else {
            // await axios.post("http://localhost:8990/api/inventario", newInventario);
            await call("put", `inventario`, newInventario);
        }
        this.setState({
            producto_id: "",
            proveedor_id: "",
            cantidad: "",
            cantidadMin: "",
            fechaEnt: "",
            fechaVen: "",
            editing: "",
            id_Inventario: "",
        });
        this.getResult();
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onChangeDateEnt = (date) => {
        this.setState({
            fechaEnt: date,
        });
    };

    onChangeDateVen = (dates) => {
        this.setState({
            fechaVen: dates,
        });
    };

    render() {
        return ( <
            div className = "row" >
            <
            div className = "col-md-8 mx-auto" >
            <
            div className = "card card-body" >
            <
            h3 className = "text-center" > Crear a Nuevo Inventario < /h3>{" "} <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label className = "text-muted" > Proveedor * < /label>{" "} <
            select name = "proveedor_id"
            onChange = { this.onChange }
            className = "form-control"
            value = { this.state.proveedor_id } >
            {
                this.state.productos.map((producto) => ( <
                    option value = { producto.Proveedor.id_Proveedor }
                    key = { producto.Proveedor.id_Proveedor } >
                    { producto.Proveedor.proveedor } { " " } <
                    /option>
                ))
            } { " " } <
            /select>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Producto * < /label>{" "} <
            select name = "producto_id"
            onChange = { this.onChange }
            className = "form-control"
            value = { this.state.producto_id } >
            {
                this.state.productos.map((producto) => ( <
                    option value = { producto.id_Producto }
                    key = { producto.id_Producto } >
                    { producto.nombreProducto } { " " } <
                    /option>
                ))
            } { " " } <
            /select>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Cantidad * < /label>{" "} <
            input type = "text"
            name = "cantidad"
            onChange = { this.onChange }
            value = { this.state.cantidad }
            className = "form-control" /
            >
            <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Cantidad Minima * < /label>{" "} <
            input type = "text"
            name = "cantidadMin"
            className = "form-control"
            onChange = { this.onChange }
            value = { this.state.cantidadMin }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Fecha Entrada * < /label> <br / >
            <
            DatePicker className = "form-control"
            selected = { this.state.fechaEnt }
            onChange = { this.onChangeDateEnt }
            value = { this.state.fechaEnt } >
            < /DatePicker>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Fecha Vencimiento * < /label>{" "} <
            br / >
            <
            DatePicker className = "form-control"
            selected = { this.state.fechaVen }
            onChange = { this.onChangeDateVen }
            value = { this.state.fechaVen } >
            < /DatePicker>{" "} <
            /div>{" "} <
            button className = "btn btn-success btn-block" > Guardar < /button>{" "} <
            /form>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default CreateInventario;