import React from 'react';

import User from '../../components/user/user';
import PreviewAvatar from '../../components/preview-avatar/preview-avatar';
import { ButtonExit } from '../../ui-lib';

const Profile = () => {
    
  return (
    <div className="layout-page">
      <ButtonExit />
      <div className="profile">
        <PreviewAvatar />
        <User />   
      </div>
    </div>
  );
};

export default Profile;