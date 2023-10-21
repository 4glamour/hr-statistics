import { BgPhotoForm } from '../BgPhotoForm/BgPhotoForm';
import { Container } from '../Container/Container';
import { AppBar, AppNavigation, ContentWrapper, LinkBtn, NavList } from './Header.styled';

export const Header = ({ setBgPhoto }) => {
  return (
    <AppBar>
      <Container>
        <ContentWrapper>
          <AppNavigation>
            <NavList>
              <li>
                <LinkBtn to="/">Statistics</LinkBtn>
              </li>
              <li>
                <LinkBtn to="/scripts">Scripts</LinkBtn>
              </li>
            </NavList>
          </AppNavigation>
          <BgPhotoForm setBgPhoto={setBgPhoto} />
        </ContentWrapper>
      </Container>
    </AppBar>
  );
};
