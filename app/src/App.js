import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateProveedor from './components/CreateProveedor'
import CreateCategoria from './components/CreateCategoria'
import CreateProducto from './components/CreateProducto'
import ProductList from './components/ProductsList'
import CreateInventario from './components/CreateInventario'
import InventarioList from './components/InventariosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import EstadoFactura from './components/EstadoFactura/EstadoFactura';
import Clientes from './components/Clientes/Clientes';
import EstadoCita from './components/EstadoCita/EstadoCita';
import Citas from './components/Citas/Citas';

function App() {
  return (
    <Router>
      <Navigation/>
        <div className="container p-4">
          <Route path="/" exact/>
          <Route path="/proveedor" component={ CreateProveedor }/>
          <Route path="/categoria" component={ CreateCategoria }/>
          <Route path="/producto" component={ CreateProducto }/>
          <Route path="/productos" component={ ProductList }/>
          <Route path="/inventario" component={ CreateInventario }/>
          <Route path="/inventarios" component={ InventarioList }/>
          <Route path="/edit/:id" component={ CreateProducto }/>
          <Route path="/edit-proveedor/:id" component={ CreateProveedor }/>
          <Route path="/edit-categoria/:id" component={ CreateCategoria }/>
          <Route path="/edit-inventario/:id" component={ CreateInventario }/>
          <Route path='/estadofactura' component={EstadoFactura}/>
          <Route path='/clientes' component={Clientes}/>
          <Route path='/estadocita' component={EstadoCita}/>
          <Route path='/citas' component={Citas}/>
        </div>
    </Router>
  );
}

export default App;
