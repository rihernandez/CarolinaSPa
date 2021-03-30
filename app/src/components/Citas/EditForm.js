import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'

function EditFormCitas(props) {

    let { id } = useParams();
    const [cita, setCita] = useState([]);

    useEffect(() =>{
        props.getCita(id)
             .then(response => setCita(response.data));
    }, [props, id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCita({ ...cita, [name]: value});
    }
    
    const handleButtonClick = (e) => {
        if(!cita) return;
        e.preventDefault();

        props.updateCita(id, cita);
        //window.location.href='/citas';
    }
    
    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !cita) return;
        event.preventDefault();

        props.updateCita(id, cita);
        //window.location.href='/citas';
    }
    

    return(
    <div>
        <h1>Editar estado de factura</h1>
            <Form.Group controlId="formGridNombre">
                <Form.Label> Servicio </Form.Label>
                <Form.Control onChange={handleInputChange} name="ID_Servicio" value={cita.ID_Servicio} onKeyDown={handleKeyDown}/>
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
                <Link to="/citas" className="btn btn-primary" onClick={handleButtonClick}> Editar </Link>
            </Form.Row>
    </div>
    )
}

export default EditFormCitas;