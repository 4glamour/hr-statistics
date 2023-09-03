import axios from 'axios';

axios.defaults.baseURL = 'https://hr-records.onrender.com';

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
export const getRecords = () => {
  return axios.get('/api/records');
};

export const addRecord = data => {
  return axios.post('/api/records', data);
};

export const deleteRecord = id => {
  return axios.delete(`/api/records/${id}`);
};
