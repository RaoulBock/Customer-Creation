import React from "react";

const Input = ({
  classIcon,
  type,
  placeholder,
  required,
  onChange,
  value,
  name,
  ...props
}) => {
  return (
    <div class="input-field">
      <i class={classIcon}></i>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
