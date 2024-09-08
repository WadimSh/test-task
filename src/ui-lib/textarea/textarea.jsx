import React from "react";

import style from "./textarea.module.css";

export const Textarea = ({
  extraClass = "",
  extraInputClass = "",
  id,
  error,
  label,
  ...rest
}) => {
  return (
    <div className={`${style.content} ${extraClass}`}>
      {label && (
        <label
          htmlFor={id}
          className={`text text_type_main text_color_black mb-4 ${style.label}`}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`${style.input} ${style.textarea} text text_type_main text_color_primary ${extraInputClass}`}
        {...rest}
      />
      {error && (
        <span
          className={`text text_type_main text_color_red mt-4 ${style.error}`}
        >
          {error}
        </span>
      )}
    </div>
  );
};
