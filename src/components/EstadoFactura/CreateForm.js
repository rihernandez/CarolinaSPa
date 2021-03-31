import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

function CreateFormEstadoFactura(props) {
    
    const [descripcion, setDescripcion] = useState('');
    
    const handleInputChange = (event) => {
        const { value } = event.target;
        setDescripcion(value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!descripcion) return;
        props.createFactura({Descripcion: descripcion});
        window.location.href = '/estadofactura';
    }

    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !descripcion) return;
        event.preventDefault();

        props.createFactura({Descripcion: descripcion});
        window.location.href = '/estadofactura';
    }

    return(
    <div>
        <h1>Crear nuevo estado de factura</h1>
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control placeholder="Descripción" onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Row>
                <Link to="/estadofactura" className="btn btn-primary mr-3"> Atrás </Link>
                <button type="submit" className="btn btn-primary"> Crear </button>
            </Form.Row>
        </Form>
    </div>
    )
}

export default CreateFormEstadoFactura;