import React from "react";
import { useParams } from "react-router-dom";

import File from "../../components/file/file";
import { ButtonReturn } from "../../ui-lib";

const UserFile = () => {
  let { id } = useParams();

  return (
    <div className="layout-page">
      <ButtonReturn />
      <div className="file">
      <File id={id} />
      </div>
    </div>
  );
};

export default UserFile;
  