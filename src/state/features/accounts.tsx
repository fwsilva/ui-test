import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface AccountsState {
  data: Array<any>
}

const initialState: AccountsState = {
  data: [],
}

export const loadAccounts = createAsyncThunk(
  'accounts/loadAccounts',
  async () => {
    try {
      // Async function goes here
    } catch (error) {
      console.log(error);
    }
  },
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: {
    // [loadAccounts.fulfilled]: (state, action) => {
      
    // },
  },
})

// Action creators are generated for each case reducer function
//export const { loadAccounts } = accountsSlice.actions

export default accountsSlice.reducer