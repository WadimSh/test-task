import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StateContext } from "../../utils/contexts/contexts";
import { Input, Button } from "../../ui-lib";

import { 
  MINIMUM_USERNAME_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
 } from "../../utils/constants/constants";

import style from "./sign-in.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const { setSharedValue } = useContext(StateContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const usernameValid = userData.username.length >= MINIMUM_USERNAME_LENGTH;
  const passwordValid = userData.password.length >= MINIMUM_PASSWORD_LENGTH;
  const submitDisabled = !usernameValid || !passwordValid;

  const onChangeInput = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    
  };

  const authorizeUser = (event) => {
    event.preventDefault();
    errorMessage && setErrorMessage("");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.name === userData.username && u.password === userData.password);
    if (user) {
      setSharedValue(user);
      navigate('/', { replace: true });
    } else {
      setErrorMessage("Неправильное имя пользователя или пароль");
    }
  };

  return (
    <form className={style.form} onSubmit={authorizeUser}>
      <Input 
        id={1}
        type="text"
        name={"username"}
        onChange={onChangeInput}
        label="Имя пользователя"
        placeholder="Введите имя пользователя"
        extraClass="mb-8"
        minLength={MINIMUM_USERNAME_LENGTH}
        required={true}
      />
      <Input 
        id={2}
        type="password"
        name={"password"}
        onChange={onChangeInput}
        label="Пароль"
        placeholder="Введите пароль"
        minLength={MINIMUM_PASSWORD_LENGTH}
        required={true}
      />
      {errorMessage && <span className={style.error}>{errorMessage}</span>}
      <Button 
        type="submit"
        kind="primary"
        text="Войти"
        disabled={submitDisabled}
        extraClass={style.btn}
      />
    </form>
  );
};

export default SignIn;