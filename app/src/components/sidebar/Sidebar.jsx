import React from "react";
import "./Sidebar.css";
import { isAdmin, getUser } from "../../utils/auth";
import { Link } from "react-router-dom";

const links = [
  { icon: "fas fa-file-alt", path: "/factura", title: "Factura Producto" },
  { icon: "fas fa-file-alt", path: "/factserv", title: "Factura Servicio" },
  { icon: "fas fa-calendar-week", path: "/citas", title: "Citas" },
];

const linksAdmin = [
  { icon: "fas fa-boxes", path: "/producto", title: "Crear Producto" },
  { icon: "fas fa-boxes", path: "/productos", title: "Productos" },
  { icon: "fas fa-user-plus", path: "/serv", title: "Servicios" },
  { icon: "fa fa-user-tie", path: "/proveedor", title: "Proveedores" },
  {
    icon: "fas fa-dolly-flatbed",
    path: "/inventario",
    title: "Crear Inventario",
  },
  { icon: "fas fa-dolly-flatbed", path: "/inventarios", title: "Inventarios" },
  { icon: "fas fa-list-ul", path: "/categoria", title: "Categorias" },
  { icon: "fas fa-users", path: "/usuario", title: "Usuarios" },
  { icon: "fas fa-user-tag", path: "/rol", title: "Roles" },
  { icon: "fas fa-user-friends", path: "/Perf", title: "Perfiles" },
  { icon: "fas fa-chalkboard-teacher", path: "/clientes", title: "Clientes" },
  {
    icon: "fas fa-file-invoice",
    path: "/estadofactura",
    title: "Estado de facturas",
  },
  {
    icon: "far fa-calendar-check",
    path: "/estadocita",
    title: "Estado de citas",
  },
];

const Sidebar = () => {
  const [active, setActive] = React.useState("Factura");

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

      {links.map((link, i) => (
        <Link
          className={`navbar-brand ${active === link.title ? "active" : ""}`}
          to={link.path}
          key={i}
          onClick={() => setActive(link.title)}
        >
          <i className={link.icon}></i> {link.title}
        </Link>
      ))}

      {isAdmin() && (
        <>
          {linksAdmin.map((link, i) => (
            <Link
              className={`navbar-brand ${
                active === link.title ? "active" : ""
              }`}
              to={link.path}
              key={i}
              onClick={() => setActive(link.title)}
            >
              <i className={link.icon}></i> {link.title}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
