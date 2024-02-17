import React from "react";
import styles from "./input.module.css";
import PropTypes from "prop-types";

/**
 * Small Input UI component
 */
const Input = ({ size = "medium", ...rest }) => {
  return (
    <input
      type="text"
      className={`${styles.input} ${styles[`input-${size}`]}`}
      {...rest}
    />
  );
};
Input.propTypes={
   /**
   * Pick A Background Color
   */
  backgroundColor: PropTypes.string,
  /**
   * Pick the input size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   *  Input placeholder
   */
 placeholder: PropTypes.string,
}
Input.defaultProps={
  backgroundColor: "#f8f8f8",
  size:"medium",
  // placeholder:"Medium"
}
export default Input;
