import { saveItem, deleteItem, loadItem } from './storage';

export const login = (token) => {
  return saveItem('accessToken', token);
};

export const logout = () => {
  return deleteItem('accessToken');
};

export const getToken = () => {
  return loadItem('accessToken');
};
