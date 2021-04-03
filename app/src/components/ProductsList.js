import React, { Component } from "react";
// import axios from 'axios'
import { call } from "../utils/api";

import { Link } from "react-router-dom";

class ProductsList extends Component {
    state = {
        productos: [],
    };

    componentDidMount() {
        this.getResult();
    }

    getResult = async() => {
        const prod = await call("get", `producto`);

        // const prod = await axios.get('http://localhost:8990/api/producto');
        this.setState({
            productos: prod,
        });
    };

    deleteProduct = async(id) => {
        await call("delete", `producto/${id}`);

        // axios.delete('http://localhost:8990/api/producto/' + id);
        window.location.href = "/productos";
    };

    render() {
        return ( <
            div className = "row" >
            <
            table className = "table table-hover table-sm" >
            <
            thead >
            <
            tr >
            <
            th > Producto < /th> <
            th > Categoria < /th> <
            th > Proveedor < /th> <
            th > Descripcion < /th> <
            th > Precio < /th> <
            th > Existencia Min < /th> <
            th > Existencia Max < /th> <
            th > Ultima Venta < /th> <
            th > Ultima Entrada < /th> <
            th > Estado < /th> <
            th colSpan = "2" > Acciones < /th> <
            /tr> <
            /thead> <
            tbody > {
                this.state.productos.map((producto) => ( <
                    tr key = { producto.id_Producto }
                    onDoubleClick = {
                        () => {
                            this.deleteProduct(producto.id_Producto);
                        }
                    } >
                    <
                    td > { producto.nombreProducto } < /td> <
                    td > { producto.Categoria.categoria } < /td> <
                    td > { producto.Proveedor.proveedor } < /td> <
                    td > { producto.descripcion } < /td> <
                    td > { producto.precio } < /td> <
                    td > { producto.existenciaMin } < /td> <
                    td > { producto.existenciaMax } < /td> <
                    td > { producto.ultimaVenta } < /td> <
                    td > { producto.ultimaEntrada } < /td> <
                    td > { producto.estado } < /td> <
                    td >
                    <
                    Link className = "btn btn-sm btn-primary"
                    to = { "/edit/" + producto.id_Producto } >
                    Editar <
                    /Link> <
                    /td> <
                    td >
                    <
                    button className = "btn btn-sm btn-danger"
                    onClick = {
                        () => {
                            this.deleteProduct(producto.id_Producto);
                        }
                    } >
                    Borrar <
                    /button> <
                    /td> <
                    /tr>
                ))
            } <
            /tbody> <
            /table> <
            /div>
        );
    }
}

export default ProductsList;