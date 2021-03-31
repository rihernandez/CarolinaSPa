import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Table from './Table';
import CreateForm from './CreateForm';
import EditForm from './EditForm';

function Citas() {

  const [citas, setCitas] = useState([]);

  useEffect(() => {
    getAllCitas().then(response => setCitas(response.data));
  }, []);

  const apiUrl = 'http://localhost:8990/api/citas/';

  const  getAllCitas = async () => {
      try {
          const response = await axios.get(apiUrl)
          return response;
      } catch (err) {
          console.log(err);
      }
  }

  const getCita = async (id) => {
      try {
          const response = await axios.get(apiUrl + id)
          return response;
      } catch (err) {
          console.log(err);
      }
  }

  const createCita = async (cita) => {
      try{
          await axios.post(apiUrl, {
            ID_Servicio: cita.ID_Servicio,
            ID_EstadoCita: cita.ID_EstadoCita,
            ID_Cliente: cita.ID_Cliente,
        });
      } catch (err) {
          console.log(err);
      }
  }

  const updateCita = async (id, cita) => {
      try{
          await axios.put(apiUrl + id, {
            ID_Servicio: cita.ID_Servicio,
            ID_EstadoCita: cita.ID_EstadoCita,
            ID_Cliente: cita.ID_Cliente,
        });
      } catch (err) {
          console.log(err.error);
      }
  }

  const  deleteCita = async (id) => {
      try{
          await axios.delete(apiUrl + id);
      } catch (err) {
          console.log(err);
      }
  }

  const [servicios, setServicios] = useState([]);
    useEffect(() => {
        let url = 'http://localhost:8990/api/servicios/';
        axios.get(url).then(response => setServicios(response.data));
    }, [])

    const [estadoCitas, setEstadoCitas] = useState([]);
    useEffect(() => {
        let url = 'http://localhost:8990/api/estadocita/';
        axios.get(url).then(response => setEstadoCitas(response.data));
    }, [])

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        let url = 'http://localhost:8990/api/clientes/';
        axios.get(url).then(response => setClientes(response.data));
    }, [])

  let { path, url } = useRouteMatch();
  
  return (
    <div>
      <Switch>
        <Route path={`${path}/create`} render={() => <CreateForm createCita={createCita} servicios={servicios} estadoCitas={estadoCitas} clientes={clientes}/>}/>
        <Route path={`${path}/edit/:id`} render={() => <EditForm getCita={getCita} updateCita={updateCita} createCita={createCita} servicios={servicios} estadoCitas={estadoCitas} clientes={clientes}/>}/>
        <Route exact path={`${path}`}>
          <Link className="btn btn-primary" to={`${url}/create`}> Crear Cita </Link>
          <Table citas={citas} deleteCita={deleteCita}/>
        </Route>
      </Switch>
    </div>
  );  
}

export default Citas;