import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CategoryForm = styled.form`
  width: max-content;

  display: flex;
  justify-content: center;
  gap: 10px;

  background-color: rgba(255, 248, 220, 0.7);
  padding: 10px;
  border-radius: 5px;
`;

export const AddInput = styled.input`
  width: 150px;
  padding: 7px;

  border: 1px solid gray;
  border-radius: 10px;
`;

export const AddSelect = styled.select`
  width: 130px;
  padding: 7px;

  border: 1px solid gray;
  border-radius: 10px;

  cursor: pointer;
`;
