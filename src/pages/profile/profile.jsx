import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import style from "./p.module.css";

function PreviewBeforeUpload() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setFileName(file.name);
  };

  useEffect(() => {
    const fileInput = document.getElementById('file-1');
    fileInput.addEventListener('change', handleFileChange);
    return () => {
      fileInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <div className={style.form}>
      <div className={style.grid}>
        <div className={style.formelement}>
          <input type="file" id="file-1" accept="image/*" />
          <label htmlFor="file-1" id="file-1-preview">
            <img src={previewUrl || 'https://bit.ly/3ubuq5o'} alt="" />
            <div>
              <span>+</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}


const Profile = () => {
  let { id } = useParams();
  const storedUsers = localStorage.getItem("users");
  const users = storedUsers ? JSON.parse(storedUsers) : [];
  const user = users.find(u => u.id === +id);

  return (
    <>
      <PreviewBeforeUpload />
      <div className="text text_type_main text_color_primary">
        <span>{user.name}: {user.email} - {user.password}</span>
      </div>
    </>
  );
};

export default Profile;