import { useState } from 'react';
import { AddCountBtn } from '../AddCountBtn/AddCountBtn';
import { Section } from '../Section/Section';
import { CallsWrapper, CountNumber, TotalCount, TypeWrapper, Wrapper } from './CallsSection.styled';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export const CallsSection = ({ callsBtns, addRecord, callsRecords, updateBtnActiveStatus }) => {
  const [filter, setFilter] = useState('active');

  const filteredBtns = callsBtns.filter(btn => (filter === 'active' ? btn.active : !btn.active));

  return (
    <Section>
      <Wrapper>
        <TotalCount>
          Звонки всего: <CountNumber>{callsRecords.length}</CountNumber>
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
        {filteredBtns.map(callBtn => {
          const currentActionTotal = callsRecords.filter(
            record => record.category.name === callBtn.name
          ).length;

          return (
            <AddCountBtn
              key={callBtn._id}
              info={callBtn}
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
