import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button, Textarea } from "../../ui-lib";

import { 
  MINIMUM_USERNAME_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
  MAXIMUM_DESCRIPTION_LENGTH,
  EMAIL_REGULAR,
  MAXIMUM_USERNAME_LENGTH,
} from "../../utils/constants/constants";

import style from "./file.module.css";

const File = ({ id }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const user = users.find(u => u.id === +id);
  const [userData, setUserData] = useState(user);
  
  const emailValid = EMAIL_REGULAR.test(userData.email);

  const errorEmail = !emailValid && 'Не правельный e-mail';

  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prevState) => ({ ...prevState, [name]: value}));    
  };

  const updateUser = (event) => {
    event.preventDefault();
    const existingUserIndex = users.findIndex((user) => user.id === userData.id);
    if (existingUserIndex !== -1) {
      const newUsers = [...users];
      newUsers[existingUserIndex] = userData;
      localStorage.setItem('users', JSON.stringify(newUsers));
      setUsers(newUsers);
    } else {
      const newUsers = [...users, userData];
      localStorage.setItem('users', JSON.stringify(newUsers));
      setUsers(newUsers);
    }
  };

  const handleDeleteClick = () => {
    const newUsers = users.filter((user) => user.id !== userData.id);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUsers(newUsers);
    navigate(-1);
  };

  return (
    <form className={style.form} onSubmit={updateUser}>
      <Input 
        id={1}
        type="text"
        name={"name"}
        onChange={onChangeInput}
        label="Имя пользователя"
        placeholder="Введите имя пользователя"
        value={userData.name}
        extraClass="mb-8"
        minLength={MINIMUM_USERNAME_LENGTH}
        maxLength={MAXIMUM_USERNAME_LENGTH}
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
        error={errorEmail}
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
      />
      <Textarea
        id={4}
        type="about"
        name="about"
        onChange={onChangeInput}
        label="О себе"
        placeholder="Расскажите о себе"
        defaultValue={userData.about}
        maxLength={MAXIMUM_DESCRIPTION_LENGTH}
      />
      <div className={style.block_btn}>
        <Button 
          type="submit"
          kind="primary"
          text="Сохранить изменения"
        />
        <Button 
          type="button"
          kind="primary"
          text="Удалить"
          onClick={handleDeleteClick}
          extraClass={style.btn}
        />
      </div>
      
    </form>
  );
};

export default File;