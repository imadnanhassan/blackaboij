// checkBoxSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'checkBox',
  selectAll: false,
  checkboxes: [],
}

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState,
  reducers: {
    toggleSelectAll: (state, action) => {
      state.selectAll = action.payload
      state.checkboxes = state.checkboxes.map(() => action.payload)
    },
    toggleCheckbox: (state, action) => {
      const index = action.payload
      state.checkboxes[index] = !state.checkboxes[index]
      state.selectAll = state.checkboxes.every(Boolean)
    },
  },
})

export const { toggleSelectAll, toggleCheckbox } = checkBoxSlice.actions

export default checkBoxSlice.reducer
