import { useState, useEffect } from "react";

import style from "./preview-avatar.module.css";

const PreviewAvatar = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    const fileInput = document.getElementById('file-1');
    fileInput.addEventListener('change', handleFileChange);
    return () => {
      fileInput.removeEventListener('change', handleFileChange);
    };
  }, []);
  
  return (
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
  );
}

export default PreviewAvatar;