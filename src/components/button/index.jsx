import React from "react";
import "./style.css"

export default function Button({ children, disabled, onClick }) {
    return (
      <button
        className={`button ${disabled ? "button-disabled" : "button-active"}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }