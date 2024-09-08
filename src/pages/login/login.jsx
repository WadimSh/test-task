import React from "react";
import { NavLink } from "react-router-dom";

import SignIn from "../../components/sign-in/sign-in";
import { Title } from "../../ui-lib";

const Login = () => {

  return (
    <>
      <Title 
        tag="h2"
        text="Вход"
        extraClass="mb-16"
      />
      <SignIn />
      <div >
        <p
          className="text text_type_main text_color_primary mb-9"
        >
          Вы — новый пользователь?
        </p>
        <NavLink
          to="/sign-up"
          className="text text_type_button text_color_additional"
        >
          Зарегистрироваться
        </NavLink>
      </div>
    </>
  );
};

export default Login;