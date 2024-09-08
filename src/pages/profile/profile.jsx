import React from "react";
import { useParams } from 'react-router-dom';

const Profile = () => {
  let { id } = useParams();
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];
  const user = users.find(u => u.id === +id);

  return (
    <div className="text text_type_main text_color_primary">
      <span>{user.name}: {user.email} - {user.password}</span>
    </div>
  );
};

export default Profile;