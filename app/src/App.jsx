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

import requireAuth from "./components/Authorize";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="p-4">
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
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

        <Route exact path="/">
          <SignIn />
        </Route>
      </div>
    </Router>
  );
}

export default App;
