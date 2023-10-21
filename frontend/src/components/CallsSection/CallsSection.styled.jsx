import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TypeWrapper = styled.div`
  background-color: rgba(255, 248, 220, 0.7);
  padding: 10px;
  border-radius: 5px;
`;

export const TotalCount = styled.div`
  text-align: center;
  font-weight: 600;

  background-color: rgba(255, 248, 220, 0.4);
  padding: 5px;
  border-radius: 5px;
`;

export const CountNumber = styled.span`
  padding: 1px 3px;
  color: #32cd32;
  font-size: 18px;
  font-weight: 700;
  background-color: rgba(0, 0, 0);
  border-radius: 5px;
`;

export const CallsWrapper = styled.div`
  padding-right: 100px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
