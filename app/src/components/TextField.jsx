import React from "react";

const TextField = ({
  icon,
  name,
  placeholder,
  type = null,
  value,
  onChange = () => {},
  ...rest
}) => {
  return (
    <div className="form-group input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
      </div>
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
