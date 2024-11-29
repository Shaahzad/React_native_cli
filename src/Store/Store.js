import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        theme: ThemeReducer
    },
  })
  
