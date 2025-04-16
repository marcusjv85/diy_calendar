import React from "react";

function Element({ className, children, onClick }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {children}
    </div>
  );
}

export default Element;
