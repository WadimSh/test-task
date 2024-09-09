import React from "react";

import Card from "../../components/card/card";
import { ButtonExit } from "../../ui-lib";

const UserList = () => {
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  return (
    <div style={{ width: '90vw', height: '100vh', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
      <ButtonExit />
      <div style={{ marginTop: '10%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', maxWidth: '1220px' }}>
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