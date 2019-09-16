import React from "react";

export const renderField = ({
  input,
  label,
  type,
  className,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    {label ? <label>{label}</label> : null}
    <div>
      <input
        {...input}
        className={className}
        placeholder={placeholder}
        type={type}
      />
      <p style={{ color: "red", textAlign: 'left', width: '70%' }}>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </p>
    </div>
  </div>
);
