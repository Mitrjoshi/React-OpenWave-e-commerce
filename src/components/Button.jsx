import React from "react";
import styles from "../styles.js";

const Button = ({ text }) => {
  return <button className={`${styles.login} max-w-[240px]`}>{text}</button>;
};

export default Button;
