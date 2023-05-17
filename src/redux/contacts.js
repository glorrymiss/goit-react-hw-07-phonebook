import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';

const hendlePending = (state, action) => {
  state.contacts.isLoading = true;
};

const handleSuccessGet = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.data = action.payload;
};

const handleSuccessCreate = (state, action) => {
  console.log(action);
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.data.push(action.payload);
};

const handleSuccessDelete = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  const index = state.contacts.data.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.data.splice(index, 1);
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
    contactsFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, hendlePending)
      .addCase(fetchContact.fulfilled, handleSuccessGet)
      .addCase(fetchContact.rejected, handleError)
      .addCase(addContact.pending, hendlePending)
      .addCase(addContact.fulfilled, handleSuccessCreate)
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, hendlePending)
      .addCase(deleteContact.fulfilled, handleSuccessDelete)
      .addCase(deleteContact.rejected, handleError);
  },
});

// Генератори екшенів
export const { contactsFilter } = Contacts.actions;

export const ContactsReducer = Contacts.reducer;
