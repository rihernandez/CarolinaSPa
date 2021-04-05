import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function EditFormCitas(props) {
    let { id } = useParams();
    const [cita, setCita] = useState([]);

    useEffect(() => {
        props.getCita(id).then((response) => setCita(response));
    }, [props, id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCita({...cita, [name]: value });
    };

    const handleSubmit = (e) => {
        if (!cita) return;
        e.preventDefault();

        props.updateCita(id, cita);
        window.location.href = "/citas";
    };

   return(
    <div>
        <h1>Editar estado de factura</h1>
        <button onClick={() => console.log(cita)}>s</button>
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridServicioId">
                <Form.Label> Servicio </Form.Label>
                <Form.Control as="select" name="ID_Servicio" onChange={handleInputChange}>
                    <option/>
                    {
                        props.servicios.map((servicio, key) => (
                            <option
                                selected={servicio.id_servicio === cita.ID_Servicio}  
                                key={key} 
                                value={servicio.id_servicio}>
                                {servicio.servicio}
                            </option>
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
                            <option 
                                selected={estadoCita.ID_EstadoCita === cita.ID_EstadoCita} 
                                key={key} 
                                value={estadoCita.ID_EstadoCita}>
                                {estadoCita.Descripcion}
                            </option>
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
                            <option 
                                selected={cliente.ID_Cliente === cita.ID_Cliente} 
                                key={key} 
                                value={cliente.ID_Cliente}>
                                {cliente.Cedula}
                            </option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
            <Form.Row>
                <Link to="/citas" className="btn btn-primary mr-3"> Atrás </Link>
                <Link to="/citas" className="btn btn-primary" onClick={handleSubmit}> Editar </Link>
            </Form.Row>
        </Form>
    </div>
    )
}

export default EditFormCitas;