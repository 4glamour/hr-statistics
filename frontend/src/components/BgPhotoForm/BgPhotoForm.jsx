import { useState } from 'react';
import { ImgInput, PhotoForm, Submit } from './BgPhotoForm.styled';

export const BgPhotoForm = ({ setBgPhoto }) => {
  const [img, setImg] = useState('');

  const handleChange = e => {
    setImg(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBgPhoto(img);
  };
  return (
    <PhotoForm onSubmit={handleSubmit}>
      <ImgInput type="text" value={img} onChange={handleChange} />
      <Submit type="submit">Set</Submit>
    </PhotoForm>
  );
};
