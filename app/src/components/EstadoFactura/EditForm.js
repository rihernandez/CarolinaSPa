import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'

function EditFormEstadoFactura(props) {

    let { id } = useParams();
    const [descripcion, setDescripcion] = useState([]);

    useEffect(() =>{
        props.getFactura(id, setDescripcion)
             .then(response => setDescripcion(response.data));
    }, [props, id]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setDescripcion(value);
    }
    
    const handleButtonClick = (e) => {
        if(!descripcion) return;

        e.preventDefault();
        props.updateFactura(id, {Descripcion: descripcion});
        window.location.href='/estadofactura';
    }
    
    const handleKeyDown = (event) => {
        if(event.key !== 'Enter' || !descripcion) return;

        event.preventDefault();
        props.updateFactura(id, {Descripcion: descripcion});
        window.location.href='/estadofactura';
    }

    return(
    <div>
        <h1>Editar estado de factura</h1>
        <Form className="shadow p-3 mb-5 bg-white rounded">
            <Form.Group controlId="formGridDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control onChange={handleInputChange} defaultValue={descripcion.Descripcion} onKeyDown={handleKeyDown}/>
            </Form.Group>
            <Form.Row>
                <Link to="/estadofactura" className="btn btn-primary mr-3"> Atrás </Link>
                <Link to="/estadofactura" className="btn btn-primary" onClick={handleButtonClick}> Editar </Link>
            </Form.Row>
        </Form>
    </div>
    )
}

export default EditFormEstadoFactura;