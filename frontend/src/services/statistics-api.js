import axios from 'axios';

// axios.defaults.baseURL = 'https://hr-statistics-ja95.onrender.com';
axios.defaults.baseURL = 'http://localhost:3030/';

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

//auth

export const logInUser = async credentials => {
  const res = await axios.post('/api/users/login', credentials);

  return res.data;
};

export const getUserInfo = async token => {
  const res = await axios.get('/api/users/current', token);

  return res.data;
};
