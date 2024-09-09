import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./button-exit.module.css";

export const ButtonExit = ({ extraClass = "", ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
  };

  return (
    <button
      className={`${styles.button} ${extraClass}`}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      <p className={`text text_type_h2 ${styles.text}`}>{"\u{2190}"}</p>
      <p className={`text text_type_button ml-4`}>Выход</p>
    </button>
  );
};
