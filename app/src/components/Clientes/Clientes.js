import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { call } from "../../utils/api";

import Table from "./Table";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getAllClientes().then((response) => setClientes(response));
    }, []);

    const getAllClientes = async() => {
        try {
            const response = await call("get", `clientes/`);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const getCliente = async(id) => {
        try {
            const response = await call("get", `clientes/` + id);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const createCliente = async(cliente) => {
        try {
            await call("post", `clientes/`, {
                Nombre: cliente.Nombre,
                Apellidos: cliente.Apellidos,
                Cedula: cliente.Cedula,
                FechaNacimiento: cliente.FechaNacimiento,
                TelefonoCasa: cliente.TelefonoCasa,
                Celular: cliente.Celular,
                Direccion: cliente.Direccion,
                Email: cliente.Email,
                CantidadVisitas: cliente.CantidadVisitas,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const updateCliente = async(id, cliente) => {
        try {
            await call("put", `clientes/` + id, {
                Nombre: cliente.Nombre,
                Apellidos: cliente.Apellidos,
                Cedula: cliente.Cedula,
                FechaNacimiento: cliente.FechaNacimiento,
                TelefonoCasa: cliente.TelefonoCasa,
                Celular: cliente.Celular,
                Direccion: cliente.Direccion,
                Email: cliente.Email,
                CantidadVisitas: cliente.CantidadVisitas,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCliente = async(id) => {
        try {
            await call("delete", `clientes/` + id);
        } catch (err) {
            console.log(err);
        }
    };

    let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/create`} render={() => <CreateForm createCliente={createCliente}/>}/>
        <Route path={`${path}/edit/:id`} render={() => <EditForm getCliente={getCliente} updateCliente={updateCliente}/>}/>
        <Route exact path={`${path}`}>
          <Link className="btn btn-primary" to={`${url}/create`}> Crear Cliente </Link>
          <Table clientes={clientes} deleteCliente={deleteCliente}/>
        </Route>
      </Switch>
    </div>
  );  
}

export default Clientes;