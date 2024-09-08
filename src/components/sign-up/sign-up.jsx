import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StateContext } from "../../utils/contexts/contexts";
import { Input, Button, Textarea } from "../../ui-lib";

import { 
  MINIMUM_USERNAME_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
  MAXIMUM_DESCRIPTION_LENGTH,
  EMAIL_REGULAR,
  MAXIMUM_USERNAME_LENGTH,
 } from "../../utils/constants/constants";

import style from "./sign-up.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { setSharedValue } = useContext(StateContext);

  const [userData, setUserData] = useState({
    id: 100,
    name: "",
    password: "",
    email: "",
    about: "",
    role: "user",
  });

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const id = users.length + 1;

  const addUser = () => {
    const newUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
  };
  
  const [errorMessage, setErrorMessage] = useState("");

  const usernameValid = userData.name.length >= MINIMUM_USERNAME_LENGTH && userData.name.length <= MAXIMUM_USERNAME_LENGTH;
  const passwordValid = userData.password.length >= MINIMUM_PASSWORD_LENGTH;
  const emailValid = EMAIL_REGULAR.test(userData.email);
  const submitDisabled = !usernameValid || !passwordValid || !emailValid;

  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prevState) => ({ ...prevState, [name]: value, id: id }));    
  };

  const registerUser = (event) => {
    event.preventDefault();
    errorMessage && setErrorMessage("");
    const user = users.find(u => u.name === userData.name && u.password === userData.password && u.email === userData.email);
    if (user) {
      setErrorMessage("Вы уже зарегестрированы");
      return
    }
    setSharedValue(userData);
    addUser();
    navigate('/', { replace: true });
  };

  return (
    <form className={style.form} onSubmit={registerUser}>
      <Input 
        id={1}
        type="text"
        name={"name"}
        onChange={onChangeInput}
        label="Имя пользователя"
        placeholder="Введите имя пользователя"
        value={userData.username}
        extraClass="mb-8"
        minLength={MINIMUM_USERNAME_LENGTH}
        maxLength={MAXIMUM_USERNAME_LENGTH}
        required={true}
      />
      <Input
        id={2}
        type="email"
        name="email"
        onChange={onChangeInput}
        label="E-mail"
        placeholder="Укажите ваш e-mail"
        value={userData.email}
        extraClass="mb-8"
        required={true}
      />
      <Input 
        id={3}
        type="password"
        name={"password"}
        onChange={onChangeInput}
        label="Пароль"
        placeholder="Введите пароль"
        value={userData.password}
        minLength={MINIMUM_PASSWORD_LENGTH}
        extraClass="mb-8"
        required={true}
      />
      <Textarea
        id={5}
        type="about"
        name="about"
        onChange={onChangeInput}
        label="О себе"
        placeholder="Расскажите о себе"
        maxLength={MAXIMUM_DESCRIPTION_LENGTH}
      />
      {errorMessage && <span className={style.error}>{errorMessage}</span>}
      <Button 
        type="submit"
        kind="primary"
        text="Зарегистрироваться"
        disabled={submitDisabled}
        extraClass={style.btn}
      />
    </form>
  );
};

export default SignUp;