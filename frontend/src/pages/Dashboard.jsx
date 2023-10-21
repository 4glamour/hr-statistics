import { useEffect, useState } from 'react';
import { AddCategoryForm } from '../components/AddCategoryFrom/AddCategoryFrom';
import { Container } from '../components/Container/Container';
import { CallsSection } from '../components/CallsSection/CallsSection';
import { RecordsSection } from '../components/RecordsSection/RecordsSection';
import { MessagesSection } from '../components/MessagesSection/MessagesSection';
import {
  getCategories,
  getRecords,
  deleteRecord as deleteRecordFromDb,
  addRecord as addRecordToDb,
  addCategory as addCategoryToDb,
} from '../services/statistics-api';

export default function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [actionRecords, setActionRecords] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const categories = await getCategories();
        setCategories(categories.data.result);

        const records = await getRecords();
        setActionRecords(records.data.result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const addCategory = async data => {
    try {
      const res = await addCategoryToDb(data);

      setCategories(categories => {
        return [...categories, res.data.result];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const callsBtns = categories.filter(category => category.type === 'calls');
  const messagesBtns = categories.filter(category => category.type === 'messages');

  const addRecord = async data => {
    try {
      const res = await addRecordToDb(data);

      setActionRecords(record => {
        return [...record, res.data.result];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const callsRecords = actionRecords.filter(record => record.category.type === 'calls');
  const messagesRecords = actionRecords.filter(record => record.category.type === 'messages');

  const deleteRecord = async id => {
    try {
      await deleteRecordFromDb(id);
      setActionRecords(records => {
        return records.filter(record => record._id !== id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateBtnActiveStatus = (id, status) => {
    setCategories(categories =>
      categories.map(category => {
        if (category._id === id) {
          return {
            ...category,
            ...status,
          };
        }

        return category;
      })
    );
  };

  return (
    <Container>
      <AddCategoryForm addCategory={addCategory} />
      <CallsSection
        callsBtns={callsBtns}
        addRecord={addRecord}
        callsRecords={callsRecords}
        updateBtnActiveStatus={updateBtnActiveStatus}
      />
      <MessagesSection
        messagesBtns={messagesBtns}
        addRecord={addRecord}
        messagesRecords={messagesRecords}
        updateBtnActiveStatus={updateBtnActiveStatus}
      />
      <RecordsSection
        actionRecords={actionRecords}
        deleteRecord={deleteRecord}
        setActionRecords={setActionRecords}
      />
    </Container>
  );
}
