import React from "react";

//TODO ADD STYLING
export const DropDown = ({
  t,
  keyValue,
  label,
  dropdownData,
  onChange,
  value,
}) => (
  <div className="dropdown">
    <h1 className="dropdown-header header-label">{t(label)}</h1>
    <select
      className="dropdown-content"
      name={keyValue}
      value={value}
      onChange={onChange}
    >
      {dropdownData.map((country, index) => {
        return (
          <option key={index} className="dropdown-item" value={country}>
            {country}
          </option>
        );
      })}
    </select>
  </div>
);
