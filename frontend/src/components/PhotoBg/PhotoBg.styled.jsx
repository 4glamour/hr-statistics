import styled from '@emotion/styled';

export const BgImg = styled.div`
  min-height: 100vh;
  padding-top: 50px;

  background: linear-gradient(to right, rgba(23, 34, 152, 0.1), rgba(23, 34, 152, 0.1)),
    url(${props => props.photo});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
