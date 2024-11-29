import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "light" | "dark",
  }
  export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      lightTheme: (state) => {
        state.value = "light"
      },
      darkTheme: (state) => {
        state.value = "dark"
      },
    },
  })
    

export const { lightTheme, darkTheme} = ThemeSlice.actions

export default ThemeSlice.reducer

