import React from "react";
import { NavLink } from "react-router-dom";

import SignUp from "../../components/sign-up/sign-up";
import { Title } from "../../ui-lib";

const Register = () => {

  return (
    <>
      <Title 
        tag="h2"
        text="Регистрация"
        extraClass="mb-16"
      />
      <SignUp />
      <div >
        <p
          className="text text_type_main text_color_primary mb-9"
        >
          Уже зарегистрированы?
        </p>
        <NavLink
          to="/sign-in"
          className="text text_type_button text_color_additional"
        >
          Войти
        </NavLink>
      </div>
    </>
  );
};

export default Register;