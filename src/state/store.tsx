import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from './features/accounts';
import sidebarMenuReducer from './features/sidebarMenu';

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    sidebarMenu: sidebarMenuReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch