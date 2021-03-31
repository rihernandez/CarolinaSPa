import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

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

    return(
    <div>
        <h1>Crear nuevo estado de factura</h1>
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridServicioId">
                <Form.Label> Servicio </Form.Label>
                <Form.Control as="select" name="ID_Servicio" onChange={handleInputChange}>
                    <option/>
                    {
                        props.servicios.map((servicio, key) => (
                            <option key={key} value={servicio.id_servicio}>{servicio.servicio}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridEstadoCitaId">
                 <Form.Label> Estado de Cita </Form.Label>
                 <Form.Control as="select" name="ID_EstadoCita" onChange={handleInputChange}>
                    <option/>
                    {
                        props.estadoCitas.map((estadoCita, key) => (
                            <option key={key} value={estadoCita.ID_EstadoCita}>{estadoCita.Descripcion}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridClienteId">
                <Form.Label> Cliente </Form.Label>
                <Form.Control as="select" name="ID_Cliente" onChange={handleInputChange}>
                    <option/>
                    {
                        props.clientes.map((cliente, key) => (
                            <option key={key} value={cliente.ID_Cliente}>{cliente.Cedula}</option>
                        ))
                    }
                </Form.Control>
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