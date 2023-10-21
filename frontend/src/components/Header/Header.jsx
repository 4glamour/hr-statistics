import { BgPhotoForm } from '../BgPhotoForm/BgPhotoForm';
import { Container } from '../Container/Container';
import { AppBar, ContentWrapper } from './Header.styled';

export const Header = ({ setBgPhoto }) => {
  return (
    <AppBar>
      <Container>
        <ContentWrapper>
          <BgPhotoForm setBgPhoto={setBgPhoto} />
        </ContentWrapper>
      </Container>
    </AppBar>
  );
};
