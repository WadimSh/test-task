import { useContext, useState } from "react";

import { StateContext } from "../../utils/contexts/contexts";
import { Input, Textarea, Button } from "../../ui-lib";
import { MINIMUM_PASSWORD_LENGTH, MAXIMUM_DESCRIPTION_LENGTH } from "../../utils/constants/constants";

import style from "./user.module.css";

const User = () => {
  const { sharedValue } = useContext(StateContext);
  const [userData, setUserData] = useState(sharedValue);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

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
  
  return (
    <form className={style.form} onSubmit={updateUser}>
      <Input 
        id={1}
        type="text"
        name={"name"}
        label="Имя пользователя"
        value={userData.name}
        extraInputClass={style.inputdef}
        extraClass="mb-8"
        disabled={true}
      />
      <Input
        id={2}
        type="email"
        name="email"
        label="E-mail"
        value={userData.email}
        extraInputClass={style.inputdef}
        extraClass="mb-8"
        disabled={true}
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
      <Button 
        type="submit"
        kind="primary"
        text="Сохранить изменения"
        extraClass={style.btn}
      />
    </form>
  );
};

export default User;