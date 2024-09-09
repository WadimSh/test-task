import React from "react";
import { Link } from "react-router-dom";

import { Title } from "../../ui-lib";
import icon from "../../assets/icons/profile.svg";

import style from "./card.module.css"

const Card = ({ user }) => {

  return (
    <Link to={`/profile/${user.id}`} className={style.link}>
    <article className={style.wrapper}>
      <Title 
        tag="h2"
        text={user.name}
        extraClass={style.title}
      />
      <img 
        className={style.icon}
        src={icon}
        alt="Профайл"      
      />
      <div className={style.block}>
        <span className="text text_type_cardh3 text_color_bg">{user.email}</span>
      </div>
    </article>
    </Link>
  );
};

export default Card;