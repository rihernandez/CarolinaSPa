import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

function CreateFormCita(props) {
    
    const initialCitaState = {
        ID_Servicio: null,
        ID_EstadoCita: null,
        ID_Cliente: null
    }
    const [cita, setCita] = useState(initialCitaState);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCita({ ...cita, [name]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!cita) return;

        const newCita = {
            ID_Servicio: cita.ID_Servicio,
            ID_EstadoCita: cita.ID_EstadoCita,
            ID_Cliente: cita.ID_Cliente,
        }

        props.createCita(newCita);
        window.location.href = '/citas';
    }

    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !cita) return;
        event.preventDefault();

        props.createCita(cita);
        window.location.href = '/citas';
    }

    return(
    <div>
        <h1>Crear nuevo estado de factura</h1>
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridNombre">
                <Form.Label> Servicio </Form.Label>
                <Form.Control onChange={handleInputChange} name="ID_Servicio" value={cita.ID_Cliente} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridCedula">
                 <Form.Label> Estado de Cita </Form.Label>
                <Form.Control onChange={handleInputChange} name="ID_EstadoCita" value={cita.ID_EstadoCita} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Group controlId="formGridFechaNacimiento">
                <Form.Label> Cliente </Form.Label>
                <Form.Control onChange={handleInputChange} name="ID_Cliente" value={cita.ID_Cliente} onKeyDown={handleKeyDown}/>
            </Form.Group>
                
            <Form.Row>
                <Link to="/citas" className="btn btn-primary mr-3"> Atrás </Link>
                <Link to="/citas" className="btn btn-primary" onClick={handleSubmit}> Crear </Link>
            </Form.Row>
        </Form>
    </div>
    )
}

export default CreateFormCita;