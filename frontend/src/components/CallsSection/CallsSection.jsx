import { AddCountBtn } from '../AddCountBtn/AddCountBtn';
import { Section } from '../Section/Section';
import { CallsWrapper, TotalCount } from './CallsSection.styled';

export const CallsSection = ({ callsBtns, addRecord, callsRecords }) => {
  return (
    <Section>
      <TotalCount>звонки всего: {callsRecords.length}</TotalCount>
      <CallsWrapper>
        {callsBtns.map(callBtn => {
          const currentActionTotal = callsRecords.filter(
            record => record.name === callBtn.name
          ).length;

          return (
            <AddCountBtn
              key={callBtn.id}
              info={callBtn}
              addRecord={addRecord}
              currentActionTotal={currentActionTotal}
            />
          );
        })}
      </CallsWrapper>
    </Section>
  );
};
