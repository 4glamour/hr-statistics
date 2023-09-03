import { useState } from 'react';
import { Section } from '../Section/Section';
import { CategoryForm } from './AddCategoryFrom.styled';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export const AddCategoryForm = ({ addCategory }) => {
  const [type, setType] = useState('messages');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const category = {
      type,
      name,
      phone: phone || 'No phone number',
    };

    if (!name) {
      return;
    }

    addCategory(category);
  };

  return (
    <Section title="Добавление">
      <CategoryForm>
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel id="category-type">Type</InputLabel>
          <Select
            labelId="category-type"
            id="category-type"
            value={type}
            label="Type"
            onChange={e => setType(e.target.value)}
          >
            <MenuItem value="messages">Сообщения</MenuItem>
            <MenuItem value="calls">Звонки</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Название"
          variant="outlined"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          required
          size="small"
        />
        <TextField
          label="Номер телефона"
          variant="outlined"
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
          }}
          size="small"
        />
        <Button variant="contained" size="small" onClick={handleSubmit}>
          Добавить
        </Button>
      </CategoryForm>
    </Section>
  );
};
