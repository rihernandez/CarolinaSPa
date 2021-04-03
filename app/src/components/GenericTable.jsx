import React from "react";

const GenericTable = ({
  fields = [],
  headers = [],
  data = [],
  onRowSelected = () => {},
  onDeleteRow = () => {},
  idName = "",
  showDelete = false,
}) => {
  return (
    <div
      style={{
        maxHeight: "400px",
        maxWidth: "1500px",
        overflowY: "scroll",
        overflowX: "scroll",
      }}
    >
      <table className="table table-dark">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                scope="col"
                key={i}
                style={{ wordBreak: "keep-all", whiteSpace: "nowrap" }}
              >
                {header}
              </th>
            ))}
            {showDelete && (
              <th scope="col" style={{ textAlign: "center" }}>
                Eliminar
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((element, i) => (
            <tr
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => onRowSelected(element[idName])}
            >
              {fields.map((field, f) => (
                <td key={f}>{element[field]}</td>
              ))}

              {showDelete && (
                <td
                  style={{ textAlign: "center", color: "red" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteRow(element[idName]);
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
