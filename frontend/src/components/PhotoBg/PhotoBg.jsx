import { BgImg } from './PhotoBg.styled';

export const PhotoBg = ({ children, photo }) => {
  return <BgImg photo={photo}>{children}</BgImg>;
};
