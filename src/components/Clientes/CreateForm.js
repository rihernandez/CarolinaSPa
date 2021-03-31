import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

function CreateFormEstadoFactura(props) {
    
    const initialClienteState = {
        Nombre: '', 
        Apellidos: '',
        Cedula: '',
        FechaNacimiento: '', 
        TelefonoCasa: '', 
        Celular: '',
        Direccion: '', 
        Email: '', 
        CantidadVisitas: '', 
    }
    const [cliente, setCliente] = useState(initialClienteState);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCliente({ ...cliente, [name]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!cliente) return;
        const newCliente = {
            Nombre: cliente.Nombre ?? '', 
            Apellidos: cliente.Apellidos ?? '',
            Cedula: cliente.Cedula ?? '',
            FechaNacimiento: (cliente.FechaNacimiento !== '' ? cliente.FechaNacimiento : null), 
            TelefonoCasa: cliente.TelefonoCasa ?? '', 
            Celular: cliente.Celular ?? '',
            Direccion: cliente.Direccion ?? '', 
            Email: cliente.Email ?? '', 
            CantidadVisitas: cliente.CantidadVisitas ?? '', 
        }

        props.createCliente(newCliente);
        window.location.href = '/clientes';
    }

    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !cliente) return;
        event.preventDefault();

        props.createCliente(cliente);
        window.location.href = '/clientes';
    }

    return(
    <div>
        <h1>Crear nuevo estado de factura</h1>
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={handleInputChange} name="Nombre" value={cliente.Nombre} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridApellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control onChange={handleInputChange} name="Apellidos" value={cliente.Apellidos} onKeyDown={handleKeyDown}/>                
            </Form.Group>
            <Form.Group controlId="formGridCedula">
                 <Form.Label>Cédula</Form.Label>
                <Form.Control onChange={handleInputChange} name="Cedula" value={cliente.Cedula} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridFechaNacimiento">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control onChange={handleInputChange} name="FechaNacimiento" value={cliente.FechaNacimiento} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridTelefonoCasa">
                <Form.Label>Tel. Casa</Form.Label>
                <Form.Control onChange={handleInputChange} name="TelefonoCasa" value={cliente.TelefonoCasa} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridCelular">
                <Form.Label>Celular</Form.Label>
                <Form.Control onChange={handleInputChange} name="Celular" value={cliente.Celular} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control onChange={handleInputChange} name="Direccion" value={cliente.Direccion} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control onChange={handleInputChange} name="Email" value={cliente.Email} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridCantidadVisitas">
                <Form.Label>Cantidad de visitas</Form.Label>
                <Form.Control onChange={handleInputChange} name="CantidadVisitas" value={cliente.CantidadVisitas} onKeyDown={handleKeyDown}/>
            </Form.Group>
                
            <Form.Row>
                <Link to="/clientes" className="btn btn-primary mr-3"> Atrás </Link>
                <Link to="/clientes" className="btn btn-primary" onClick={handleSubmit}> Crear </Link>
            </Form.Row>
        </Form>
    </div>
    )
}

export default CreateFormEstadoFactura;