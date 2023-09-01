import { AddCountBtn } from '../AddCountBtn/AddCountBtn';
import { CallsWrapper, TotalCount } from '../CallsSection/CallsSection.styled';
import { Section } from '../Section/Section';

export const MessagesSection = ({ messagesBtns, addRecord, messagesRecords }) => {
  return (
    <Section>
      <TotalCount>сообщения всего: {messagesRecords.length}</TotalCount>
      <CallsWrapper>
        {messagesBtns.map(msgBtn => {
          const currentActionTotal = messagesRecords.filter(
            record => record.name === msgBtn.name
          ).length;

          return (
            <AddCountBtn
              key={msgBtn.id}
              info={msgBtn}
              addRecord={addRecord}
              currentActionTotal={currentActionTotal}
            />
          );
        })}
      </CallsWrapper>
    </Section>
  );
};
