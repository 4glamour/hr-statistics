import { useState } from 'react';
import { AddCategoryForm } from './components/AddCategoryFrom/AddCategoryFrom';
import { Container } from './components/Container/Container';
import { CallsSection } from './components/CallsSection/CallsSection';
import { RecordsSection } from './components/RecordsSection/RecordsSection';
import { MessagesSection } from './components/MessagesSection/MessagesSection';

function App() {
  const [categories, setCategories] = useState([]);
  const [actionRecords, setActionRecords] = useState([]);

  const addCategory = data => {
    setCategories(categories => {
      return [...categories, data];
    });
  };

  const callsBtns = categories.filter(category => category.type === 'calls');
  const messagesBtns = categories.filter(category => category.type === 'messages');

  const addRecord = data => {
    setActionRecords(record => {
      return [...record, data];
    });
  };

  const callsRecords = actionRecords.filter(record => record.type === 'calls');
  const messagesRecords = actionRecords.filter(record => record.type === 'messages');

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
