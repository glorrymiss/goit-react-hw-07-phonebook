import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://645bab9e99b618d5f32243bf.mockapi.io/';

// export const fetchContacts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/contacts');
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//     console.log(response.data);
//   } catch (error) {
//     // Обробка помилки
//     dispatch(fetchingError(error.message));
//   }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  console.log(response);
  console.log(response.data);
  return response.data;
});
