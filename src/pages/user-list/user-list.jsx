import React from "react";

const UserList = () => {
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  return (
    <div style={{ display: 'flex', gap: '8px', margin: '20px' }}>
      {users.map(user => (
        user.role === 'user' &&
        <div key={user.id} className="text text_type_main text_color_primary">
          <span>{user.name}: {user.email} - {user.password}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;