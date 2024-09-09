import React from "react";

import Card from "../../components/card/card";
import { ButtonExit } from "../../ui-lib";

const UserList = () => {
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  return (
    <div className="layout-page">
      <ButtonExit />
      <div className="list">
        {users.map(user => (
          user.role === 'user' &&
          <Card 
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;