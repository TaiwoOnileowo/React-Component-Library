import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

/**
 * Primary UI component
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? `${styles.primarybutton}`
    : `${styles.secondarybutton}`;
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button-${size}`]} ${mode}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the Main Call to Action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Pick A Background Color
   */
  backgroundColor: PropTypes.string,
  /**
   * Pick the button size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
