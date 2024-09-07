import { Input, Button } from "../../ui-lib";

import style from "./sign-in.module.css";

const SignIn = () => {

  const authorizeUser = (event) => {
    event.preventDefault();
  }

  return (
    <form className={style.form} onSubmit={authorizeUser}>
      <Input />
      <Input />
      <Button />
    </form>
  );
};

export default SignIn;