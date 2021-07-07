import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AccountsState {
  accounts: Array<any>
}

const initialState: AccountsState = {
    accounts: [],
}

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
//export const { loadAccounts } = counterSlice.actions

export default accountsSlice.reducer