import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

function CreateFormEstadoCita(props) {
    
    const initialEstadoCitaState = {
        Descripcion: ''
    }
    const [estadoCita, setEstadoCita] = useState(initialEstadoCitaState);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEstadoCita({ ...estadoCita, [name]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!estadoCita) return;
        const newCliente = {
            Descripcion: estadoCita.Descripcion
        }

        props.createCliente(newCliente);
        window.location.href = '/estadocita';
    }

    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !estadoCita) return;
        event.preventDefault();

        props.createCliente(estadoCita);
        window.location.href = '/estadocita';
    }

    return(
    <div>
        <h1>Crear nuevo estado de factura</h1>
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control placeholder="Descripción" name='Descripcion' value={estadoCita.Descripcion} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </Form.Group>
                
            <Form.Row>
                <Link to="/estadocita" className="btn btn-primary mr-3"> Atrás </Link>
                <Link to="/estadocita" className="btn btn-primary" onClick={handleSubmit}> Crear </Link>
            </Form.Row>
        </Form>
    </div>
    )
}

export default CreateFormEstadoCita;