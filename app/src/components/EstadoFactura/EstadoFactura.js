import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Table from './Table';
import CreateForm from './CreateForm';
import EditForm from './EditForm';

function EstadoFactura() {

  const [estadoFactura, setEstadoFactura] = useState([]);

  useEffect(() => {
    getAllFacturas().then(response => setEstadoFactura(response.data));
    console.log('hi')
  }, []);

  const apiUrl = 'http://localhost:8990/api/estadofactura/';

  const  getAllFacturas = async () => {
      try {
          const response = await axios.get(apiUrl)
          return response;
      } catch (err) {
          console.log(err);
      }
  }

  const getFactura = async (id) => {
      try {
          const response = await axios.get(apiUrl + id)
          return response;
      } catch (err) {
          console.log(err);
      }
  }

  const createFactura = async (factura) => {
      try{
          await axios.post(apiUrl, {
              Descripcion: factura.Descripcion
          });
      } catch (err) {
          console.log(err);
      }
  }

  const updateFactura = async (id, factura) => {
      try{
          await axios.put(apiUrl + id, {
              Descripcion: factura.Descripcion
          });
      } catch (err) {
          console.log(err);
      }
  }

  const  deleteFactura = async (id) => {
      try{
          await axios.delete(apiUrl + id);
      } catch (err) {
          console.log(err);
      }
  }

  let { path, url } = useRouteMatch();
  
  return (
    <div>
      <Switch>
        <Route path={`${path}/create`} render={() => <CreateForm createFactura={createFactura}/>}/>
        <Route path={`${path}/edit/:id`} render={() => <EditForm getFactura={getFactura} updateFactura={updateFactura}/>}/>
        <Route exact path={`${path}`}>
          <Link className="btn btn-primary" to={`${url}/create`}> Crear Estado de Factura </Link>
          <Table estadoFactura={estadoFactura} deleteFactura={deleteFactura}/>
        </Route>
      </Switch>
    </div>
  );  
}

export default EstadoFactura;