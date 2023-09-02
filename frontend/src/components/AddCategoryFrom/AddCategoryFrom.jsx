import { useState } from 'react';
import { Section } from '../Section/Section';
import { CategoryForm } from './AddCategoryFrom.styled';

export const AddCategoryForm = ({ addCategory }) => {
  const [type, setType] = useState('messages');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const category = {
      type,
      name,
      phone,
    };

    addCategory(category);
  };

  return (
    <Section title="Добавление">
      <CategoryForm>
        <select
          name="category-type"
          id="category-type"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="messages">Сообщения</option>
          <option value="calls">Звонки</option>
        </select>
        <input
          type="text"
          placeholder="название"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        {type !== 'calls' && (
          <input
            type="text"
            placeholder="номер телефона"
            value={phone}
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
        )}
        <button type="submit" onClick={handleSubmit}>
          Добавить
        </button>
      </CategoryForm>
    </Section>
  );
};
