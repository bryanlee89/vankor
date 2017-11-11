//custom post field
import React from "react";

export default ({
  size,
  name,
  label,
  type,
  style,
  input,
  placeholder,
  dataLength,
  meta: { error, touched }
}) => {
  console.log(input);
  switch (type) {
    case "text":
      return (
        <div className={size}>
          <input
            type={type}
            style={{ marginBottom: "5px" }}
            placeholder={placeholder}
            data-length={dataLength}
            {...input}
          />
          <label htmlFor={name}>{label}</label>
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      );
    case "textarea":
      return (
        <div className={size}>
          <textarea
            {...input}
            id="textarea1"
            className="materialize-textarea col 12"
            style={style}
          />
          <label htmlFor="textarea1">Description</label>
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      );
    case "select":
      return (
        <div className={size}>
          <select  {...input} style={{ marginBottom: "5px" }}>
            <option selected value="" disabled>
              Option
            </option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
          <label>{label}</label>
          <div className="red-text" style={{ marginBottom: "20px" }}>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      );
    default:
      return null;
  }
};
