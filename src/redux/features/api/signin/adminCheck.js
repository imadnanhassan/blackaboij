import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../baseApi/baseApi";

const getToken = (token = 'adminToken') => {
  return localStorage?.getItem(token)
}

const initialState = {
  admin: false,
  loading: true
}

const adminCheck = createSlice({
  name: 'adminCheck',
  initialState: initialState,
  reducers: {
    checkAdmin: (state, { payload }) => {
      state.token = payload
    },
    toggleLoading: (state, {payload}) => {
      state.loading = payload
    },
    setAdmin: (state, {payload}) => {
      state.admin = payload
    }
  }
})

export const {checkAdmin, toggleLoading, setAdmin} = adminCheck.actions
export default adminCheck.reducer