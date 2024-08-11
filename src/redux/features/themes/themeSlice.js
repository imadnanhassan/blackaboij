import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: localStorage.getItem('isDarkMode') === 'true' || false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: state => {
      // Toggle the value of isDarkMode
      state.isDarkMode = !state.isDarkMode

      // Update localStorage with the new value
      localStorage.setItem('isDarkMode', state.isDarkMode.toString())
    },
  },
})

export const { toggleMode } = themeSlice.actions
export default themeSlice.reducer
