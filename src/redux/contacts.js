import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

export const Contacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      data: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    contactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContacts, deleteContacts, contactsFilter } = Contacts.actions;

export const ContactsReducer = Contacts.reducer;
