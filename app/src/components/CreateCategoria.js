import React, { Component } from "react";
// import axios from "axios";
import { call } from "../utils/api";

import { Link } from "react-router-dom";

class CreateCategoria extends Component {
    state = {
        categorias: [],
        categoria: "",
        descripcion: "",
        editing: false,
        id_Categoria: "",
    };

    async componentDidMount() {
        this.getCategorias();

        if (this.props.match.params.id) {
            const res = await call("get", `categoria/` + this.props.match.params.id);

            // const res = await axios.get('http://localhost:8990/api/categoria/' + this.props.match.params.id);
            this.setState({
                categoria: res.categoria,
                descripcion: res.descripcion,
                editing: true,
                id_Categoria: this.props.match.params.id,
            });
        }
    }
    getCategorias = async() => {
        const res = await call("get", `categoria`);

        // const res = await axios.get('http://localhost:8990/api/categoria');
        this.setState({
            categorias: res,
        });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = async(e) => {
        e.preventDefault();
        if (this.state.editing) {
            await call("put", `categoria/` + this.state.id_Categoria, {
                categoria: this.state.categoria,
                descripcion: this.state.descripcion,
            });
            // await axios.put(
            //     "http://localhost:8990/api/categoria/" + this.state.id_Categoria, {
            //         categoria: this.state.categoria,
            //         descripcion: this.state.descripcion,
            //     }
            // );
            window.location.href = "/categoria";
        } else {
            await call("post", `categoria`, {
                categoria: this.state.categoria,
                descripcion: this.state.descripcion,
            });

            // await axios.post("http://localhost:8990/api/categoria", {
            //     categoria: this.state.categoria,
            //     descripcion: this.state.descripcion,
            // });
            this.getCategorias();
        }
        this.setState({
            categoria: "",
            descripcion: "",
            editing: false,
            id_Categoria: "",
        });
    };

    deleteCategoria = async(id) => {
        await call("delete", `categoria/${id}`);
        // await axios.delete("http://localhost:8990/api/categoria/" + id);
        this.getCategorias();
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Nueva Categoria</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="text-muted">Categoria *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="categoria"
                                    value={this.state.categoria}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Descripcion Categoria *</label>
                                <textarea
                                    name="descripcion"
                                    value={this.state.descripcion}
                                    onChange={this.onChange}
                                    className="form-control"
                                >
                                </textarea>
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
                            ? <div></div>
                            : <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Descripcion</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.categorias.map(categoria => (
                                            <tr
                                                key={categoria.id_Categoria}
                                                onDoubleClick={() => this.deleteCategoria(categoria.id_Categoria)}
                                            >
                                                <td>{categoria.categoria}</td>
                                                <td>{categoria.descripcion}</td>
                                                <td>
                                                    <Link
                                                        className="btn btn-sm  btn-warning"
                                                        to={"/edit-categoria/" + categoria.id_Categoria}
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



export default CreateCategoria;