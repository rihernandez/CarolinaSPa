import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        AlbumsApp
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/albums"> Albums </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/albums/create"> Create Album </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/estadofactura" activeClassName='active'> Estado Factura </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/clientes" activeClassName='active'> Clientes </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/estadocita" activeClassName='active'> Estado de cita </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/citas" activeClassName='active'> Citas </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;