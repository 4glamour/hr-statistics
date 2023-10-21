import { useState } from 'react';
import { ImgInput, PhotoForm, Submit } from './BgPhotoForm.styled';
import { save } from '../../utils/helpers/localStorage';
import { LOCAL_STORAGE_BG_PHOTO_KEY } from '../../utils/constants/localStorage';

export const BgPhotoForm = ({ setBgPhoto }) => {
  const [img, setImg] = useState('');

  const handleChange = e => {
    setImg(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBgPhoto(img);
    save(LOCAL_STORAGE_BG_PHOTO_KEY, img);
  };
  return (
    <PhotoForm onSubmit={handleSubmit}>
      <ImgInput type="text" value={img} onChange={handleChange} />
      <Submit type="submit">Set</Submit>
    </PhotoForm>
  );
};
