import React from "react";
import { useParams } from "react-router-dom";

import File from "../../components/file/file";
import { ButtonReturn } from "../../ui-lib";

const UserFile = () => {
  let { id } = useParams();

  return (
    <div style={{ width: '90vw', height: '100vh', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
      <ButtonReturn />
      <div style={{ width: '100%', maxWidth: '384px', minWidth: '300px', marginTop: '8%', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
      <File id={id} />
      </div>
    </div>
  );
};

export default UserFile;
  