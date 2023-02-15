import { configureStore } from '@reduxjs/toolkit'
import filter from './factures/filter'
import faves from './factures/faves'
import auth from './factures/auth'
export const store = configureStore({
  reducer: {
    filter: filter,
    faves: faves,
    auth: auth
  },
})