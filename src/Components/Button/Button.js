import React from "react";

const Button = ({ title, classIcon, onClick }) => {
  return (
    <button onClick={onClick}>
      <div class="btn-content">
        <span>{title}</span>
        <i class={classIcon}></i>
      </div>
    </button>
  );
};

export default Button;
