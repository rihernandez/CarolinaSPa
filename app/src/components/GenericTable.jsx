import React from "react";

const GenericTable = ({ fields = [], headers = [], data = [] }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th scope="col" key={i}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((element, i) => (
          <tr key={i}>
            {fields.map((field, f) => (
              <td key={f}>{element[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;
