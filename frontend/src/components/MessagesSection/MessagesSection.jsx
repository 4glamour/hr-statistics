import { useState } from 'react';
import { AddCountBtn } from '../AddCountBtn/AddCountBtn';
import {
  CallsWrapper,
  CountNumber,
  TotalCount,
  TypeWrapper,
  Wrapper,
} from '../CallsSection/CallsSection.styled';
import { Section } from '../Section/Section';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export const MessagesSection = ({
  messagesBtns,
  addRecord,
  messagesRecords,
  updateBtnActiveStatus,
}) => {
  const [filter, setFilter] = useState('active');

  const filteredBtns = messagesBtns.filter(btn => (filter === 'active' ? btn.active : !btn.active));

  return (
    <Section>
      <Wrapper>
        <TotalCount>
          Cообщения всего: <CountNumber>{messagesRecords.length}</CountNumber>
        </TotalCount>
        <TypeWrapper>
          <FormControl sx={{ minWidth: 100 }} size="small">
            <InputLabel id="category-type">Type</InputLabel>
            <Select
              labelId="category-type"
              id="category-type"
              value={filter}
              label="Type"
              onChange={e => setFilter(e.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="hidden">Hidden</MenuItem>
            </Select>
          </FormControl>
        </TypeWrapper>
      </Wrapper>

      <CallsWrapper>
        {filteredBtns.map(msgBtn => {
          const currentActionTotal = messagesRecords.filter(
            record => record.category.name === msgBtn.name
          ).length;

          return (
            <AddCountBtn
              key={msgBtn._id}
              info={msgBtn}
              addRecord={addRecord}
              currentActionTotal={currentActionTotal}
              filter={filter}
              updateBtnActiveStatus={updateBtnActiveStatus}
            />
          );
        })}
      </CallsWrapper>
    </Section>
  );
};
