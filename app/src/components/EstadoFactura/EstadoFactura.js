import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
// import axios from 'axios';
import { call } from "../../utils/api";
import Table from "./Table";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

function EstadoFactura() {
    const [estadoFactura, setEstadoFactura] = useState([]);

    useEffect(() => {
        getAllFacturas().then((response) => setEstadoFactura(response));
    }, []);

    //   const apiUrl = 'http://localhost:8990/api/estadofactura/';

    const getAllFacturas = async() => {
        try {
            const response = await call("get", `estadofactura`);

            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const getFactura = async(id) => {
        try {
            const response = await call("get", `estadofactura/${id}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const createFactura = async(factura) => {
        try {
            await call("post", `estadofactura`, {
                Descripcion: factura.Descripcion,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const updateFactura = async(id, factura) => {
        try {
            await call("put", `estadofactura/${id}`, {
                Descripcion: factura.Descripcion,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const deleteFactura = async(id) => {
        try {
            await call("delete", `estadofactura/${id}`);
        } catch (err) {
            console.log(err);
        }
    };

    let { path, url } = useRouteMatch();

    return ( <
        div >
        <
        Switch >
        <
        Route path = { `${path}/create` }
        render = {
            () => < CreateForm createFactura = { createFactura }
            />} /
            >
            <
            Route
            path = { `${path}/edit/:id` }
            render = {
                () => ( <
                    EditForm getFactura = { getFactura }
                    updateFactura = { updateFactura }
                    />
                )
            }
            />{" "} <
            Route exact path = { `${path}` } >
            <
            Link className = "btn btn-primary"
            to = { `${url}/create` } > { " " }
            Crear Estado de Factura { " " } <
            /Link>{" "} <
            Table
            estadoFactura = { estadoFactura }
            deleteFactura = { deleteFactura }
            />{" "} <
            /Route>{" "} <
            /Switch>{" "} <
            /div>
        );
    }

    export default EstadoFactura;