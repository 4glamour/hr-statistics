import { Section } from '../Section/Section';
import { RecordItem, RecordList } from './RecordsSection.styled';

export const RecordsSection = ({ actionRecords }) => {
  const records = [...actionRecords].reverse();

  return (
    <Section title="Timeline">
      <RecordList>
        {records.map(record => {
          const date = new Date(record.createdAt);
          return (
            <RecordItem key={record._id}>
              <span>{record.category.type}</span>
              <span>{record.category.name}</span>
              <span>{date.toLocaleString()}</span>
            </RecordItem>
          );
        })}
      </RecordList>
    </Section>
  );
};
