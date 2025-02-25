import React from "react";
import "./style.css"

export default function Error({ message }) {
    return (
      <div className="error">
        <strong>Error:</strong> {message}
      </div>
    );
  }