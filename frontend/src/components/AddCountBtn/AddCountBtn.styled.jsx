import styled from '@emotion/styled';

export const CountBtn = styled.button`
  width: 100px;
  height: 100px;

  border-radius: 50%;

  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);

  background-color: #ffebcd;

  transform: scale(1);
  transition: transform 100ms ease-out, background-color 100ms ease-out;

  &:hover,
  &:focus {
    background-color: #ffe4c4;
    transform: scale(1.05);
  }

  &:active {
    background-color: #deb887;
    color: #fff;
  }

  &:disabled {
    opacity: 0.7;
    transform: scale(1);
    background-color: #ffebcd;

    cursor: not-allowed;
  }
`;

export const Counter = styled.p`
  font-weight: 700;
  font-size: 22px;
`;

export const CounterLabel = styled.p`
  font-size: 14px;
`;

export const Number = styled.p`
  font-size: 12px;
`;

export const HideBtnWrapper = styled.div`
  display: flex;
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
`;
