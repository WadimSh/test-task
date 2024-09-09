import React from "react";

import Card from "../../components/card/card";
import { ButtonReturn } from "../../ui-lib";

const UserList = () => {
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  return (
    <div style={{ width: '90vw', height: '100vh', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
      <ButtonReturn />
      <div style={{ alignSelf: 'center', marginTop: '10%', display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: 'clamp(18.75rem, 2.3214rem + 82.1429vw, 76.25rem)' }}>
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