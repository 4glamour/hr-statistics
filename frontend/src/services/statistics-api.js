import axios from 'axios';

axios.defaults.baseURL = 'https://hr-statistics-ja95.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3000/';

// categories
export const getCategories = () => {
  return axios.get('/api/categories');
};

export const addCategory = data => {
  return axios.post('/api/categories', data);
};

export const updateActiveCategory = (id, data) => {
  return axios.patch(`/api/categories/${id}`, data);
};

// records
export const getRecords = date => {
  return axios.get(`/api/records${date ? `?date=${date}` : ''}`);
};

export const addRecord = data => {
  return axios.post('/api/records', data);
};

export const deleteRecord = id => {
  return axios.delete(`/api/records/${id}`);
};
