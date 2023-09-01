import { CountBtn, Total } from './AddCountBtn.styled';

export const AddCountBtn = ({ info, addRecord, currentActionTotal }) => {
  const handleAddRecord = () => {
    const { type, name } = info;
    const callInfo = {
      type,
      name,
      date: Date.now(),
      owner: null,
    };

    console.log(callInfo);

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
