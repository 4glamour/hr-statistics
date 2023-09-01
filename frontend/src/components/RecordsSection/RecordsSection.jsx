import { Section } from '../Section/Section';
import { RecordItem, RecordList } from './RecordsSection.styled';

export const RecordsSection = ({ actionRecords }) => {
  const records = [...actionRecords].reverse();

  return (
    <Section title="Timeline">
      <RecordList>
        {records.map(record => {
          const date = new Date(record.date);
          return (
            <RecordItem key={record.date}>
              <span>{record.type}</span>
              <span>{record.name}</span>
              <span>{date.toLocaleString()}</span>
            </RecordItem>
          );
        })}
      </RecordList>
    </Section>
  );
};
