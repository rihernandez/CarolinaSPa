import React from "react";
import "./Sidebar.css";
import { isAdmin, getUser } from "../../utils/auth";

const Sidebar = () => {
  const user = getUser();
  return (
    <div className="sidebar">
      <div className="userInfo">
        <i
          className="fas fa-user-circle"
          style={{ display: "block", fontSize: "50px" }}
        ></i>
        <p style={{ fontSize: 20 }}>
          {user && user.name + " " + user.lastname}
        </p>
        <p style={{ color: "#aaafb8" }}>{user.rol && user.rol.NombreRol}</p>
        <hr />
      </div>

      <a href="#news">
        <i className="fas fa-file-alt"></i> Facturas
      </a>
      <a href="#news">
        <i className="fas fa-receipt"></i> Detalles de factura
      </a>
      <a href="#news">
        <i className="fas fa-calendar-week"></i> Citas
      </a>

      {isAdmin() && (
        <>
          {" "}
          <a href="#news">
            <i className="fa fa-user-tie"></i> Proveedores
          </a>
          <a href="#news">
            <i className="fas fa-dolly-flatbed"></i> Inventarios
          </a>
          <a href="#news">
            <i className="fas fa-boxes"></i> Productos
          </a>
          <a href="#news">
            <i className="fas fa-list-ul"></i> Categorias
          </a>
          <a href="#news">
            <i className="fas fa-users"></i> Usuarios
          </a>
          <a href="#news">
            <i className="fas fa-user-tag"></i> Roles
          </a>
          <a href="#news">
            <i className="fas fa-chalkboard-teacher"></i> Cliente
          </a>
          <a href="#news">
            <i className="fas fa-file-invoice"></i> Estado de facturas
          </a>
          <a href="#news">
            <i className="far fa-calendar-check"></i> Estado de citas
          </a>
        </>
      )}
    </div>
  );
};

export default Sidebar;
