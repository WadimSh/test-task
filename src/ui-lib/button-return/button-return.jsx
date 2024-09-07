import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./button-return.module.css";

export const ButtonReturn = ({ extraClass = "", ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className={`${styles.button} ${extraClass}`}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      <p className={`text text_type_h2 ${styles.text}`}>{"\u{2190}"}</p>
      <p className={`text text_type_button ml-4`}>Назад</p>
    </button>
  );
};
