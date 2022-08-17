import React from "react";

export const InputField = ({
  label,
  fieldType,
  fieldKey,
  value,
  error,
  onChange,
  t,
}) => (
  <div className="form-group">
    <div className="form-label">{label}</div>
    <input
      name={fieldKey}
      className="form-control"
      value={value}
      onChange={onChange}
      type={fieldType}
      placeholder={`${t("insertText")} ${label}`}
    />
  </div>
);
