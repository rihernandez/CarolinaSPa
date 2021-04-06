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
        required
        {...rest}
      >
        <option>----</option>
        {options.map((option, i) => (
          <option key={i} value={option[optionsLabel]}>
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
