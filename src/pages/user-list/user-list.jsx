import React from "react";

const UserList = () => {
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  return (
    <>
      {users.map(user => (
        <div key={user.id} className={`text text_type_button text_color_additional`}>
          <span>{user.name}" "</span>
          <span>{user.email}" "</span>
          <span>{user.password}</span>
        </div>
      ))}
    </>
  );
};

export default UserList;