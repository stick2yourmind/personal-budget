import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './states/user'

const store = configureStore({
  reducer: {
    user: userSliceReducer
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
