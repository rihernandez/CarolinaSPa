import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'

function EditFormCliente(props) {

    let { id } = useParams();
    const [cliente, setCliente] = useState([]);

    useEffect(() =>{
        props.getCliente(id)
             .then(response => setCliente(response.data));
    }, [props, id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCliente({ ...cliente, [name]: value});
    }
    
    const handleButtonClick = (e) => {
        if(!cliente) return;
        e.preventDefault();

        props.updateCliente(id, cliente);
        window.location.href='/clientes';
    }
    
    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !cliente) return;
        event.preventDefault();

        props.updateCliente(id, cliente);
        window.location.href='/clientes';
    }
    

    return(
    <div>
        <h1>Editar estado de factura</h1>
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
                <Link to="/clientes" className="btn btn-primary" onClick={handleButtonClick}> Editar </Link>
            </Form.Row>
    </div>
    )
}

export default EditFormCliente;