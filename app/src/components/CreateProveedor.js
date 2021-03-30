import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CreateProveedor extends Component {
    state = {
        proveedores: [],
        id_proveedor: '',
        proveedor: '',
        editing: false
    }

    async componentDidMount() {
        this.getProveedores();
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:8990/api/proveedor/' + this.props.match.params.id);
            this.setState({
                proveedor: res.data.proveedor,
                editing: true,
                id_proveedor: this.props.match.params.id
            })
        }
    }

    getProveedores = async () => {
        const res = await axios.get('http://localhost:8990/api/proveedor');
        this.setState({
            proveedores: res.data
        });
    }

    onChangeProveedor = (e) => {
        this.setState({
            proveedor: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            await axios.put('http://localhost:8990/api/proveedor/' + this.state.id_proveedor, {
                proveedor: this.state.proveedor
            })
            window.location.href = '/proveedor'
        } else {
            await axios.post('http://localhost:8990/api/proveedor', {
                proveedor: this.state.proveedor
            })
            this.getProveedores();
        }
        this.setState({
            proveedor: '',
            editing: false,
            id_proveedor: ''
        });
    }

    deleteProveedor = async (id) => {
        await axios.delete('http://localhost:8990/api/proveedor/' + id);
        this.getProveedores();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Nuevo Proveedor</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="text-muted">Proveedor *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.proveedor}
                                    onChange={this.onChangeProveedor}
                                />
                            </div>
                            <button type="submit" className="btn btn-success btn-block">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    {
                        this.state.editing
                            ?<div></div>
                            :<table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center" width="650px">Proveedor</th>
                                        <th className="ml-auto" width="100px">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.proveedores.map(proveedor => (
                                            <tr
                                                key={proveedor.id_Proveedor}
                                                onDoubleClick={() => this.deleteProveedor(proveedor.id_Proveedor)}
                                            >
                                                <td>{proveedor.proveedor}</td>
                                                <td>
                                                    <Link
                                                        className="btn btn-sm btn-warning "
                                                        to={"/edit-proveedor/" + proveedor.id_Proveedor}
                                                    >
                                                        Editar
                                                </Link>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        
                    }
                </div>
            </div>
        )
    }
}

export default CreateProveedor;