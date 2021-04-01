import React from "react";
import GenericTable from "../../components/GenericTable";
import { call } from "../../utils/api";
import swal from "sweetalert";
import { getUser } from "../../utils/auth";

const headers = [
  "ID Usuario",
  "Nombre Usuario",
  "Apellidos Usuario",
  "Email",
  "Rol Usuario",
];

const fields = ["ID_Usuario", "Nombre", "Apellidos", "Email", "NombreRol"];

const Usuario = ({ history }) => {
  const [usuarios, setUsuarios] = React.useState([]);

  const setFilteredUsuarios = (users) => {
    const filtered = users.filter((u) => {
      return u.ID_Usuario !== getUser().id;
    });
    setUsuarios(filtered);
  };

  const getUsuarios = React.useCallback(async () => {
    try {
      const res = await call("get", "/usuario");
      if (Array.isArray(res)) setFilteredUsuarios(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  const handleDeleteUsuario = async (id) => {
    const res = await swal("Estas seguro que deseas eliminar este usuario ?", {
      buttons: ["Cancelar!", "Si"],
    });

    if (!res) return;
    try {
      await call("delete", `usuario/${id}`);
      removeUsuarioFromState(id);
      swal(
        "Usuario eliminado con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
    } catch (e) {
      console.log("Error elimando el usuario", e);
      swal(
        "El usuarioi no puede ser eliminado debido a que esta en uso",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const removeUsuarioFromState = (id) => {
    const filtered = usuarios.filter((us) => {
      return us.ID_Usuario !== id;
    });

    setUsuarios(filtered);
  };

  React.useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h3>Usuarios</h3>
        </div>
        <div style={{ width: 300 }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.replace("/usuario/detalle")}
          >
            Crear Usuario
          </button>
        </div>
      </div>
      <GenericTable
        headers={headers}
        fields={fields}
        data={usuarios}
        onRowSelected={(id) => history.replace(`/usuario/detalle/${id}`)}
        onDeleteRow={handleDeleteUsuario}
        idName="ID_Usuario"
        showDelete={true}
      />
    </div>
  );
};

export default Usuario;
