import React, { Component } from "react";
// import axios from 'axios'
import { call } from "../utils/api";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateProducto extends Component {
    state = {
        proveedores: [],
        categorias: [],
        productos: [],
        id_Producto: "",
        id_proveedor: "",
        id_categoria: "",
        nombreProducto: "",
        precio: "",
        descripcion: "",
        cantidad: "",
        cantidadMax: "",
        cantidadMin: "",
        ultimaVenta: "",
        ultimaEntrada: "",
        estado: "",
        editing: false,
    };

    async componentDidMount() {
        this.getResult();
        if (this.props.match.params.id) {
            const res = await call("get", `producto/` + this.props.match.params.id);

            // const res = await axios.get('http://localhost:8990/api/producto/' + this.props.match.params.id);
            this.setState({
                nombreProducto: res.nombreProducto,
                id_Producto: this.props.match.params.id,
                id_categoria: res.id_categoria,
                id_proveedor: res.id_proveedor,
                precio: res.precio,
                descripcion: res.descripcion,
                cantidad: res.existencia,
                cantidadMax: res.existenciaMax,
                cantidadMin: res.existenciaMin,
                ultimaVenta: new Date(res.ultimaVenta),
                ultimaEntrada: new Date(res.ultimaEntrada),
                editing: true,
                estado: res.estado,
            });
        }
    }

    getResult = async() => {
        //cat = categorias
        const cat = await call("get", `categoria`);
        // const cat = await axios.get("http://localhost:8990/api/categoria");
        //prov = proveedores
        const prov = await call("get", `proveedor`);
        // const prov = await axios.get("http://localhost:8990/api/proveedor");
        this.setState({
            proveedores: prov,
            categorias: cat,
            id_proveedor: prov[0].id_Proveedor,
            id_categoria: cat[0].id_Categoria,
            estado: 0,
        });
    };

    onSubmit = async(e) => {
        e.preventDefault();
        const newProducto = {
            id_proveedor: this.state.id_proveedor,
            id_categoria: this.state.id_categoria,
            nombreProducto: this.state.nombreProducto,
            precio: this.state.precio,
            descripcion: this.state.descripcion,
            existencia: this.state.cantidad,
            existenciaMax: this.state.cantidadMax,
            existenciaMin: this.state.cantidadMin,
            ultimaVenta: this.state.ultimaVenta,
            ultimaEntrada: this.state.ultimaEntrada,
            estado: this.state.estado,
        };
        if (this.state.editing) {
            await call("put", `producto/` + this.state.id_Producto, newProducto);

            // await axios.put(
            //     "http://localhost:8990/api/producto/" + this.state.id_Producto,
            //     newProducto
            // );
            window.location.href = "/productos";
        } else {
            await call("post", `producto`, newProducto);

            // await axios.post("http://localhost:8990/api/producto", newProducto);
        }
        this.setState({
            nombreProducto: "",
            id_categoria: "",
            id_proveedor: "",
            precio: "",
            descripcion: "",
            cantidad: "",
            cantidadMin: "",
            cantidadMax: "",
            ultimaVenta: "",
            ultimaEntrada: "",
            estado: "",
            editing: false,
        });
        this.getResult();
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onChangeEstado = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onChangeDateVenta = (date) => {
        this.setState({
            ultimaVenta: date,
        });
    };

    onChangeDateEntrada = (dates) => {
        this.setState({
            ultimaEntrada: dates,
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
            h3 className = "text-center" > Crear Nuevo Producto < /h3>{" "} <
            form onSubmit = { this.onSubmit } >
            <
            div className = "form-group" >
            <
            label className = "text-muted" > Nombre Producto * < /label>{" "} <
            input type = "text"
            name = "nombreProducto"
            className = "form-control"
            onChange = { this.onChange }
            value = { this.state.nombreProducto }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Categoria Producto * < /label>{" "} <
            select name = "id_categoria"
            className = "form-control"
            value = { this.state.id_categoria }
            onChange = { this.onChange } >
            {
                this.state.categorias.map((categorias) => ( <
                    option value = { categorias.id_Categoria }
                    key = { categorias.id_Categoria } >
                    { categorias.categoria } { " " } <
                    /option>
                ))
            } { " " } <
            /select>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Proveedor * < /label>{" "} <
            select name = "id_proveedor"
            className = "form-control"
            value = { this.state.id_proveedor }
            onChange = { this.onChange } >
            {
                this.state.proveedores.map((proveedor) => ( <
                    option value = { proveedor.id_Proveedor }
                    key = { proveedor.id_Proveedor } >
                    { proveedor.proveedor } { " " } <
                    /option>
                ))
            } { " " } <
            /select>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Precio * < /label>{" "} <
            input type = "text"
            name = "precio"
            className = "form-control"
            onChange = { this.onChange }
            value = { this.state.precio }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Descripcion * < /label>{" "} <
            textarea name = "descripcion"
            className = "form-control"
            onChange = { this.onChange }
            value = { this.state.descripcion } >
            < /textarea>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Cantidad * < /label>{" "} <
            input type = "text"
            name = "cantidad"
            className = "form-control"
            onChange = { this.onChange }
            value = { this.state.cantidad }
            />{" "} <
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
            label className = "text-muted" > Cantidad Maxima * < /label>{" "} <
            input type = "text"
            name = "cantidadMax"
            className = "form-control"
            onChange = { this.onChange }
            value = { this.state.cantidadMax }
            />{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Ultima Venta * < /label> <br / >
            <
            DatePicker className = "form-control"
            selected = { this.state.ultimaVenta }
            onChange = { this.onChangeDateVenta }
            value = { this.state.ultimaVenta } >
            < /DatePicker>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Ultima Entrada * < /label> <br / >
            <
            DatePicker className = "form-control"
            selected = { this.state.ultimaEntrada }
            onChange = { this.onChangeDateEntrada }
            value = { this.state.ultimaEntrada } >
            < /DatePicker>{" "} <
            /div>{" "} <
            div className = "form-group" >
            <
            label className = "text-muted" > Estado < /label>{" "} <
            select name = "estado"
            className = "form-control"
            onChange = { this.onChangeEstado }
            value = { this.state.estado } >
            <
            option value = "0" > Agotado < /option>{" "} <
            option value = "1" > Existencia < /option>{" "} <
            /select>{" "} <
            /div>{" "} <
            button type = "submit"
            className = "btn btn-success btn-block" >
            Guardar { " " } <
            /button>{" "} <
            /form>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default CreateProducto;