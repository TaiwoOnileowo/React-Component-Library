import React from "react";
import styles from "./checkbox.module.css";

const Checkbox = ({ id, label, onChange }) => {
  const handleCheckboxChange = (e) => {
    onChange(id, e.target.checked);
  };

  return (
    <div>
      <input type="checkbox" id={id} onChange={handleCheckboxChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
