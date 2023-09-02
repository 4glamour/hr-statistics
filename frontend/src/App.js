import { useEffect, useState } from 'react';
import { AddCategoryForm } from './components/AddCategoryFrom/AddCategoryFrom';
import { Container } from './components/Container/Container';
import { CallsSection } from './components/CallsSection/CallsSection';
import { RecordsSection } from './components/RecordsSection/RecordsSection';
import { MessagesSection } from './components/MessagesSection/MessagesSection';
import {
  getCategories,
  getRecords,
  addRecord as addRecordToDb,
  addCategory as addCategoryToDb,
} from './services/statistics-api';

function App() {
  const [categories, setCategories] = useState([]);
  const [actionRecords, setActionRecords] = useState([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategories(categories.data.result);

      const records = await getRecords();
      setActionRecords(records.data.result);
    })();
  }, []);

  const addCategory = async data => {
    const res = await addCategoryToDb(data);

    setCategories(categories => {
      return [...categories, res.data.result];
    });
  };

  const callsBtns = categories.filter(category => category.type === 'calls');
  const messagesBtns = categories.filter(category => category.type === 'messages');

  const addRecord = async data => {
    const res = await addRecordToDb(data);

    setActionRecords(record => {
      return [...record, res.data.result];
    });
  };

  const callsRecords = actionRecords.filter(record => record.category.type === 'calls');
  const messagesRecords = actionRecords.filter(record => record.category.type === 'messages');

  return (
    <Container>
      <AddCategoryForm addCategory={addCategory} />
      <CallsSection callsBtns={callsBtns} addRecord={addRecord} callsRecords={callsRecords} />
      <MessagesSection
        messagesBtns={messagesBtns}
        addRecord={addRecord}
        messagesRecords={messagesRecords}
      />
      <RecordsSection actionRecords={actionRecords} />
    </Container>
  );
}

export default App;
