import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    admin: null
}
const getToken = () => {
    return localStorage.getItem('adminToken') ?? null;
}
export const getAdmins = createAsyncThunk('adminSlice/getAdmins', async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/check-admin`,{
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
});

// export const addAdmin = createAsyncThunk('admin/addAdmin', async (adminData) => {
//     const response = await createAdmin(adminData);
//     return response.data;
// });

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState: {
        admins: null,
        status: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getAdmins.pending, (state) => {
            state.status = 'loading';
            state.admins = null
        })
        .addCase(getAdmins.fulfilled, (state, {payload}) => {
            state.admins = payload;
            state.status = 'success'
        })
        .addCase(getAdmins.rejected, (state) => {
            state.status = 'failed'
        })
        
    },
});

export default adminSlice.reducer;