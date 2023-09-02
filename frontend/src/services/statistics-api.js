import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getCategories = () => {
  return axios.get('/api/categories');
};

export const addCategory = data => {
  return axios.post('/api/categories', data);
};

export const getRecords = () => {
  return axios.get('/api/records');
};

export const addRecord = data => {
  return axios.post('/api/records', data);
};
