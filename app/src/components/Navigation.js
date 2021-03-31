
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-dark'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						<img src='img/logo.svg' alt='Logo carolina spa' />
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='btn btn-light nav-link' to='/serv'>
									Servicios
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='btn btn-light nav-link' to='/factserv'>
									Facturas de servicios
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='btn btn-light nav-link ' to='/perf'>
									Perfiles
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
=======
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
