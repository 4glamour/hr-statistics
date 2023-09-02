import { CountBtn, Total } from './AddCountBtn.styled';

export const AddCountBtn = ({ info, addRecord, currentActionTotal }) => {
  const handleAddRecord = () => {
    const { _id } = info;
    const callInfo = {
      category: _id,
    };

    addRecord(callInfo);
  };

  return (
    <div>
      <Total>{`${info.name}: ${currentActionTotal}`}</Total>
      <CountBtn type="button" onClick={handleAddRecord}>
        {info.name}
      </CountBtn>
    </div>
  );
};
