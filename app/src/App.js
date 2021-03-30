import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateProveedor from './components/CreateProveedor'
import CreateCategoria from './components/CreateCategoria'
import CreateProducto from './components/CreateProducto'
import ProductList from './components/ProductsList'
import CreateInventario from './components/CreateInventario'
import InventarioList from './components/InventariosList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/"/>
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


      </div>
    </Router>
  );
}

export default App;
