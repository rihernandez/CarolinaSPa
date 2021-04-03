import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Factura from "./pages/factura/Factura";
import Rol from "./pages/rol/Rol";
import Usuario from "./pages/usuario/Usuario";
import CrearEditarFactura from "./pages/factura/CrearEditarFactura";
import CrearEditarRol from "./pages/rol/CrearEditarRol";
import CrearEditarUsuario from "./pages/usuario/CrearEditarUsuario";

///
import CreateProveedor from "./components/CreateProveedor";
import CreateCategoria from "./components/CreateCategoria";
import CreateProducto from "./components/CreateProducto";
import ProductList from "./components/ProductsList";
import CreateInventario from "./components/CreateInventario";
import InventarioList from "./components/InventariosList";
import FactServicio from "./components/FactServicio";
import Servicio from "./components/Servicio";
import Perfiles from "./components/Perfiles";
import FactServDeta from "./components/FactServDeta";
import CreateFactDeta from "./components/CreateFactDeta";
import CreateFactServ from "./components/CreateFactServ";
import CreateServicios from "./components/CreateServicio";
import CreatePerfiles from "./components/CreatePerfiles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EstadoFactura from "./components/EstadoFactura/EstadoFactura";
import Clientes from "./components/Clientes/Clientes";
import EstadoCita from "./components/EstadoCita/EstadoCita";
import Citas from "./components/Citas/Citas";

import requireAuth from "./components/Authorize";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="p-4">
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/factura" component={requireAuth(Factura)} />
        <Route exact path="/rol" component={requireAuth(Rol)} />
        <Route exact path="/usuario" component={requireAuth(Usuario)} />
        <Route
          exact
          path="/factura/detalle/:idfactura"
          component={requireAuth(CrearEditarFactura)}
        />
        <Route
          exact
          path="/factura/detalle"
          component={requireAuth(CrearEditarFactura)}
        />

        <Route
          exact
          path="/rol/detalle/:idrol"
          component={requireAuth(CrearEditarRol)}
        />
        <Route
          exact
          path="/rol/detalle"
          component={requireAuth(CrearEditarRol)}
        />

        <Route
          exact
          path="/usuario/detalle/:idusuario"
          component={requireAuth(CrearEditarUsuario)}
        />
        <Route
          exact
          path="/usuario/detalle"
          component={requireAuth(CrearEditarUsuario)}
        />

        {/* <Route exact path="/">
          <SignIn />
        </Route> */}

        <Route
          exact
          path="/proveedor"
          component={requireAuth(CreateProveedor)}
        />
        <Route
          exact
          path="/categoria"
          component={requireAuth(CreateCategoria)}
        />
        <Route exact path="/producto" component={requireAuth(CreateProducto)} />
        <Route exact path="/productos" component={requireAuth(ProductList)} />
        <Route
          exact
          path="/inventario"
          component={requireAuth(CreateInventario)}
        />
        <Route
          exact
          path="/inventarios"
          component={requireAuth(InventarioList)}
        />
        <Route exact path="/edit/:id" component={requireAuth(CreateProducto)} />
        <Route
          exact
          path="/edit-proveedor/:id"
          component={requireAuth(CreateProveedor)}
        />
        <Route
          exact
          path="/edit-categoria/:id"
          component={requireAuth(CreateCategoria)}
        />
        <Route
          exact
          path="/edit-inventario/:id"
          component={requireAuth(CreateInventario)}
        />
        <Route
          exact
          path="/createfactdeta"
          component={requireAuth(CreateFactDeta)}
        />
        <Route exact path="/factserv" component={requireAuth(FactServicio)} />
        <Route
          exact
          path="/factservdeta"
          component={requireAuth(FactServDeta)}
        />
        <Route exact path="/serv" component={requireAuth(Servicio)} />
        <Route exact path="/Perf" component={requireAuth(Perfiles)} />
        <Route
          exact
          path="/createfactserv"
          component={requireAuth(CreateFactServ)}
        />
        <Route
          exact
          path="/createserv"
          component={requireAuth(CreateServicios)}
        />
        <Route
          exact
          path="/createperf"
          component={requireAuth(CreatePerfiles)}
        />
        <Route
          exact
          path="/editserv/:id"
          component={requireAuth(CreateServicios)}
        />
        <Route
          exact
          path="/editperf/:id"
          component={requireAuth(CreatePerfiles)}
        />
        <Route
          exact
          path="/editfactserv/:id"
          component={requireAuth(CreateFactServ)}
        />
        <Route
          exact
          path="/editfactdeta/:id"
          component={requireAuth(CreateFactDeta)}
        />
        <Route
          exact
          path="/estadofactura"
          component={requireAuth(EstadoFactura)}
        />
        <Route exact path="/clientes" component={requireAuth(Clientes)} />
        <Route exact path="/estadocita" component={requireAuth(EstadoCita)} />
        <Route exact path="/citas" component={requireAuth(Citas)} />
      </div>
    </Router>
  );
}

export default App;
