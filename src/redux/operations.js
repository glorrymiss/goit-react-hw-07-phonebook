import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://645bab9e99b618d5f32243bf.mockapi.io';

export const fetchContact = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/Contacts');

  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async string => {
    console.log(string);
    const response = await axios.post('/Contacts', string);

    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/Contacts/${id}`);

    return response.data;
  }
);
