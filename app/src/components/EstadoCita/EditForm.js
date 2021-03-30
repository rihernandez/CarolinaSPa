import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'

function EditFormEstadoCita(props) {

    let { id } = useParams();
    const [estadoCita, setEstadoCita] = useState([]);

    useEffect(() =>{
        props.getEstadoCita(id)
             .then(response => setEstadoCita(response.data));
    }, [props, id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEstadoCita({ ...estadoCita, [name]: value});
    }
    
    const handleButtonClick = (e) => {
        if(!estadoCita) return;
        e.preventDefault();

        props.updateEstadoCita(id, estadoCita);
        window.location.href='/estadocita';
    }
    
    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !estadoCita) return;
        event.preventDefault();

        props.updateEstadoCita(id, estadoCita);
        window.location.href='/estadocita';
    }
    

    return(
    <div>
        <h1>Editar estado de factura</h1>
            <Form.Group controlId="formGridDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control placeholder="Descripción" name='Descripcion' value={estadoCita.Descripcion} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </Form.Group>
                
            <Form.Row>
                <Link to="/estadocita" className="btn btn-primary mr-3"> Atrás </Link>
                <Link to="/estadocita" className="btn btn-primary" onClick={handleButtonClick}> Editar </Link>
            </Form.Row>
    </div>
    )
}

export default EditFormEstadoCita;