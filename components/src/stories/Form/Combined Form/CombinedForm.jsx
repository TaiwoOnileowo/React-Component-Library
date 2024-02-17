
import React, { useState } from "react";
import styles from "./combinedform.module.css";
import Input from "../../Input/Input";
import { Button } from "../../Button/Button";
import { CombinedCheckboxes } from "../Checkbox/Checkbox.stories";

const CombinedForm = ({ name, email, message, onFormSubmit }) => {
  const [checkboxValues, setCheckboxValues] = useState({});

  const handleCheckboxChange = (checkboxId, isChecked) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxId]: isChecked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      checkboxes: checkboxValues,
      message: e.target.message.value,
    };
    onFormSubmit(formData);
  };

  return (
    <div className={styles.container}>
      <h1>Combined Form</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input id="name" value={name} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} />
        <label htmlFor="checkboxes">Checkboxes</label>
        <CombinedCheckboxes onCheckboxChange={handleCheckboxChange} />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="20"
          rows="5"
          value={message}
        />
        <Button
          type="submit"
          label="Submit"
          primary={true}
          className={styles.button}
        />
      </form>
    </div>
  );
};

export default CombinedForm;
