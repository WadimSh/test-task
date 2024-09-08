import React from "react";

const UserList = () => {
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  return (
    <>
      {users.map(user => (
        <div key={user.id} className="text text_type_main text_color_primary">
          <span>{user.name}: {user.email} - {user.password}</span>
        </div>
      ))}
    </>
  );
};

export default UserList;