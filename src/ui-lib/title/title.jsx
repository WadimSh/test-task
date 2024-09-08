import React from "react";

export const Title = ({ tag, text, extraClass }) => {
  let Tag;
  const customClass = {
    h1: "text_type_h1",
    h2: "text_type_h2",
    h3: "text_type_h3",
  };
  switch (tag) {
    case 'h1':
    case 'h2':
    case 'h3':
      Tag = tag;
      break;
    default:
      Tag = 'h1';
  };

  return (
    <Tag className={`text text_color_primary ${customClass[tag]} ${extraClass}`}>
      {text}
    </Tag>
  );
};
