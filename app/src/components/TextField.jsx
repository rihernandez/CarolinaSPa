import React from "react";

const TextField = ({
  icon = null,
  name,
  placeholder,
  type = null,
  value,
  onChange = () => {},
  label = null,
  ...rest
}) => {
  return (
    <div className={`form-group  ${!label ? "input-group" : ""}`}>
      {label && <label>{label}</label>}
      {icon && (
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon}></i>
          </span>
        </div>
      )}

      <input
        required
        name={name}
        className="form-control"
        placeholder={placeholder}
        type={type ? type : "text"}
        value={value || ""}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextField;
