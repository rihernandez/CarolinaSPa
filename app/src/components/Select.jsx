import React from "react";

const Select = ({
  label = "",
  options = [],
  value = null,
  optionsLabel = "",
  onChange = () => {},
  name = "",
  optionLabelExpression = null,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">{label}</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={onChange}
        value={value}
        name={name}
<<<<<<< HEAD
        required
=======
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed
        {...rest}
      >
        <option>----</option>
        {options.map((option, i) => (
<<<<<<< HEAD
          <option key={i} value={option[optionsLabel]}>
=======
          <option key={i}>
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed
            {optionLabelExpression
              ? // eslint-disable-next-line
                eval(optionLabelExpression)
              : option[optionsLabel]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
