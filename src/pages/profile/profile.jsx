import React from 'react';

import User from '../../components/user/user';
import PreviewAvatar from '../../components/preview-avatar/preview-avatar';
import { ButtonReturn } from '../../ui-lib';

const Profile = () => {
    
  return (
    <div style={{ width: '90vw', height: '100vh', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
      <ButtonReturn />
      <div style={{ width: '400px', alignSelf: 'center' }}>
        <PreviewAvatar />
        <User />   
      </div>
    </div>
  );
};

export default Profile;