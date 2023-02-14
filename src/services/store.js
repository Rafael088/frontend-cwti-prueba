import { configureStore } from '@reduxjs/toolkit'
import filter from './factures/filter'
export const store = configureStore({
  reducer: {
    filter: filter
  },
})