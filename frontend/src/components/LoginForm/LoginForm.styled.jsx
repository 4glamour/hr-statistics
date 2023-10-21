import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > label {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const Btn = styled.button`
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
