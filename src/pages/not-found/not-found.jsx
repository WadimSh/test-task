import React from "react";
import { useNavigate } from "react-router-dom";

import { Title, Button } from "../../ui-lib";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
  }

  const style = { width: '150px', marginTop: '20px' }

  return (
    <div>
      <Title 
        tag="h3"
        text="Ой, а такой страницы у нас нет!"
      />
      <Button 
          type="button"
          kind="primary"
          text="Назад"
          onClick={handleClick}
          style={style}
        />
    </div>
  );
};

export default NotFound;