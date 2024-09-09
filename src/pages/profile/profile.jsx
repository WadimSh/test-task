import React from 'react';

import User from '../../components/user/user';
import PreviewAvatar from '../../components/preview-avatar/preview-avatar';
import { ButtonExit } from '../../ui-lib';

const Profile = () => {
    
  return (
    <div style={{ width: '90vw', height: '100vh', display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
      <ButtonExit />
      <div style={{ width: '100%', maxWidth: '384px', minWidth: '300px', alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <PreviewAvatar />
        <User />   
      </div>
    </div>
  );
};

export default Profile;