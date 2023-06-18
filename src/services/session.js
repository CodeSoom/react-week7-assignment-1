// session.js
import { saveItem, deleteItem, loadItem } from './storage';

export const login = (token) => {
  saveItem('accessToken', token);
};

export const logout = () => {
  deleteItem('accessToken');
};

export const getToken = () => {
  loadItem('accessToken');
};
