import React from "react";
import PropTypes from "prop-types";
import BORTELLE from "../assets/BORTELLE.png";

import { Button } from "../Button/Button";
import styles from "./header.module.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className={styles.header}>
      <div className={styles.logoDiv}>
        <img src={BORTELLE} className={styles.logo} alt="" />
      </div>
      <div className={styles.welcomeDiv}>
        {user ? (
          <>
            <span className={styles.welcome}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button
              size="small"
              className={styles.button}
              onClick={onLogout}
              label="Log out"
            />
          </>
        ) : (
          <>
            <Button size="small" className={styles.button2} onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
