import { updateActiveCategory } from '../../services/statistics-api';
import {
  CountBtn,
  Counter,
  CounterLabel,
  CounterWrapper,
  HideBtnWrapper,
  // Number,
} from './AddCountBtn.styled';
import Button from '@mui/material/Button';

export const AddCountBtn = ({
  info,
  addRecord,
  currentActionTotal,
  filter,
  updateBtnActiveStatus,
}) => {
  const handleAddRecord = () => {
    const { _id } = info;
    const callInfo = {
      category: _id,
    };

    addRecord(callInfo);
  };

  const hideBtn = () => {
    const { _id } = info;

    updateActiveCategory(_id, { active: false });

    updateBtnActiveStatus(_id, { active: false });
  };

  const showBtn = () => {
    const { _id } = info;

    updateActiveCategory(_id, { active: true });

    updateBtnActiveStatus(_id, { active: true });
  };

  return (
    <CounterWrapper>
      <CountBtn type="button" onClick={handleAddRecord} disabled={!info.active}>
        <Counter>{currentActionTotal}</Counter>
        <CounterLabel>{info.name}</CounterLabel>
      </CountBtn>
      {/* <Number>{info.phone}</Number> */}
      <HideBtnWrapper>
        {filter === 'active' ? (
          <Button variant="outlined" onClick={hideBtn} size="small">
            Hide
          </Button>
        ) : (
          <Button variant="outlined" onClick={showBtn} size="small">
            Show
          </Button>
        )}
      </HideBtnWrapper>
    </CounterWrapper>
  );
};
