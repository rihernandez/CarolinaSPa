import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Factura from "./pages/factura/Factura";
import Rol from "./pages/rol/Rol";
import Usuario from "./pages/usuario/Usuario";
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

        <Route path="/factura" component={requireAuth(Factura)} />
        <Route path="/rol" component={requireAuth(Rol)} />
        <Route path="/usuario" component={requireAuth(Usuario)} />

        <Route exact path="/">
          <SignIn />
        </Route>
      </div>
    </Router>
  );
}

export default App;
