import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "COMPONENTS/Form/CHECKBOX",
  component: Checkbox,
  tags: ["autodocs"],
};


export const CombinedCheckboxes = ({ onCheckboxChange }) => {
  const checkboxes = [
    { id: 'checkbox1', label: 'Checkbox 1' },
    { id: 'checkbox2', label: 'Checkbox 2' },
    { id: 'checkbox3', label: 'Checkbox 3' },
  ];

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.id}
          id={checkbox.id}
          label={checkbox.label}
          onChange={onCheckboxChange}
        />
      ))}
    </div>
  );
};


export const Checkbox1 = {
  args: {
    label: "Checkbox 1",
  },
};
export const Checkbox2 = {
  args: {
    label: "Checkbox 2",
  },
};
export const Checkbox3 = {
  args: {
    label: "Checkbox 3",
  },
};
