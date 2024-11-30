import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "light" | "dark",
  }
  export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      lightTheme: (state) => {
        state.value = "Light"
      },
      darkTheme: (state) => {
        state.value = "Dark"
      },
    },
  })
    

export const { lightTheme, darkTheme} = ThemeSlice.actions

export default ThemeSlice.reducer

