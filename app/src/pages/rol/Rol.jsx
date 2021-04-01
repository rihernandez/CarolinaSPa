import React from "react";
import GenericTable from "../../components/GenericTable";
import { call } from "../../utils/api";
import swal from "sweetalert";

const headers = ["ID Rol", "Nombre de Rol", "Descripción de Rol"];

const fields = ["ID_Rol", "NombreRol", "DescripcionRol"];

const Rol = ({ history }) => {
  const [rols, setRols] = React.useState([]);

  const getRols = React.useCallback(async () => {
    try {
      const res = await call("get", "/rol");
      if (Array.isArray(res)) setRols(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  const handleRowSelected = (id) => {
    history.replace(`/rol/detalle/${id}`);
  };

  const handleDeleteRol = async (id) => {
    const res = await swal("Estas seguro que deseas eliminar este rol ?", {
      buttons: ["Cancelar!", "Si"],
    });

    if (!res) return;
    try {
      await call("delete", `rol/${id}`);
      removeRoleFromState(id);
      swal(
        "Rol eliminado con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
    } catch (e) {
      console.log("Error elimando el rol", e);
      swal(
        "El rol no puede ser eliminado debido a que esta en uso",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const removeRoleFromState = (id) => {
    const filtered = rols.filter((rol) => {
      return rol.ID_Rol !== id;
    });

    setRols(filtered);
  };

  React.useEffect(() => {
    getRols();
  }, [getRols]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h3>Roles</h3>
        </div>
        <div style={{ width: 300 }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.replace("/rol/detalle")}
          >
            Crear Rol
          </button>
        </div>
      </div>
      <GenericTable
        headers={headers}
        fields={fields}
        data={rols}
        onRowSelected={handleRowSelected}
        onDeleteRow={handleDeleteRol}
        idName="ID_Rol"
        showDelete={true}
      />
    </div>
  );
};

export default Rol;
