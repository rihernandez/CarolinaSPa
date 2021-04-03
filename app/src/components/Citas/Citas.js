import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { call } from "../../utils/api";
import Table from "./Table";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

function Citas() {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        getAllCitas().then((response) => setCitas(response));
    }, []);

    const getAllCitas = async() => {
        try {
            const response = await call("get", `citas`);

            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const getCita = async(id) => {
        try {
            const response = await call("get", `citas/${id}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const createCita = async(cita) => {
        try {
            await call("post", `citas`, {
                ID_Servicio: cita.ID_Servicio,
                ID_EstadoCita: cita.ID_EstadoCita,
                ID_Cliente: cita.ID_Cliente,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const updateCita = async(id, cita) => {
        try {
            await call("put", `citas/${id}`, {
                ID_Servicio: cita.ID_Servicio,
                ID_EstadoCita: cita.ID_EstadoCita,
                ID_Cliente: cita.ID_Cliente,
            });
        } catch (err) {
            console.log(err.error);
        }
    };

    const deleteCita = async(id) => {
        try {
            await call("delete", `citas/${id}`);
        } catch (err) {
            console.log(err);
        }
    };

    const [servicios, setServicios] = useState([]);
    useEffect(() => {
        async function fetchServicios() {
            try {
                const response = await call("get", `servicios`);
                setServicios(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchServicios();

        // let url = "http://localhost:8990/api/servicios/";
        // axios.get(url).then((response) => setServicios(response.data));
    }, []);

    const [estadoCitas, setEstadoCitas] = useState([]);
    useEffect(() => {
        async function fetchEstadoCita() {
            try {
                const response = await call("get", `estadocita`);
                setEstadoCitas(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchEstadoCita();
    }, []);

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        async function fetchClientes() {
            try {
                const response = await call("get", `clientes`);
                setClientes(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchClientes();
    }, []);

    let { path, url } = useRouteMatch();

    return ( <
        div >
        <
        Switch >
        <
        Route path = { `${path}/create` }
        render = {
            () => ( <
                CreateForm createCita = { createCita }
                servicios = { servicios }
                estadoCitas = { estadoCitas }
                clientes = { clientes }
                />
            )
        }
        />{" "} <
        Route path = { `${path}/edit/:id` }
        render = {
            () => ( <
                EditForm getCita = { getCita }
                updateCita = { updateCita }
                createCita = { createCita }
                servicios = { servicios }
                estadoCitas = { estadoCitas }
                clientes = { clientes }
                />
            )
        }
        />{" "} <
        Route exact path = { `${path}` } >
        <
        Link className = "btn btn-primary"
        to = { `${url}/create` } > { " " }
        Crear Cita { " " } <
        /Link>{" "} <
        Table citas = { citas }
        deleteCita = { deleteCita }
        />{" "} <
        /Route>{" "} <
        /Switch>{" "} <
        /div>
    );
}

export default Citas;