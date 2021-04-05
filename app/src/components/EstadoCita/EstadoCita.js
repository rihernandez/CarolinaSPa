import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { call } from "../../utils/api";
import Table from "./Table";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

function EstadoCita() {
    const [estadoCitas, setEstadoCitas] = useState([]);

    useEffect(() => {
        getAllEstadosCitas().then((response) => setEstadoCitas(response));
    }, []);

    // const apiUrl = 'http://localhost:8990/api/estadocita/';

    const getAllEstadosCitas = async() => {
        try {
            const response = await call("get", `estadocita/`);

            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const getEstadoCita = async(id) => {
        try {
            const response = await call("get", `estadocita` + id);

            return response;
        } catch (err) {
            console.log(err);
        }
    };

    const createEstadoCita = async(estadoCita) => {
        try {
            await call("post", `estadocita`, {
                Descripcion: estadoCita.Descripcion,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const updateEstadoCita = async(id, estadoCita) => {
        try {
            await call("put", `estadocita/` + id, {
                Descripcion: estadoCita.Descripcion,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const deleteEstadoCita = async(id) => {
        try {
            await call("delete", `estadocita/` + id);
        } catch (err) {
            console.log(err);
        }
    };

    let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/create`} render={() => <CreateForm createCliente={createEstadoCita}/>}/>
        <Route path={`${path}/edit/:id`} render={() => <EditForm getEstadoCita={getEstadoCita} updateEstadoCita={updateEstadoCita}/>}/>
        <Route exact path={`${path}`}>
          <Link className="btn btn-primary" to={`${url}/create`}> Crear cita </Link>
          <Table estadoCitas={estadoCitas} deleteEstadoCita={deleteEstadoCita}/>
        </Route>
      </Switch>
    </div>
  );  
}

export default EstadoCita;