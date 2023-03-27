import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    allComplaints:null,
    error:false,
    complaint:null
}

export const fetchAllComplaints= createAsyncThunk("complaints", ()=>{
    return axios.get("http://localhost:1111/complaints").then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message);
});
})

export const fetchSingleComplaint= createAsyncThunk("complaint/SingleComplaint", ({id})=>{
    return axios.get(`http://localhost:1111/complaints/${id}`).then((res) =>res.data).catch((err)=>{
        throw new Error(err.response.data.message);
});
})


const complaintSlice = createSlice({
    name:"complaints",
    initialState,
    extraReducers:{
        [fetchAllComplaints.pending]:(state)=>{
            state.allComplaints=null;
            state.loading=false;
            state.error=true;
            state.complaint=null;
        },
        [fetchAllComplaints.fulfilled]:(state,action)=>{
            state.allComplaints=action.payload;
            state.error=false;
            state.complaint=null;
            state.loading=false;
        },
        [fetchAllComplaints.rejected]:(state,action)=>{
            console.log(action.error.message);
            state.complaint=null;
            state.loading=false;
            state.allComplaints = null;
            state.error=action.error.message;
        },
        [fetchSingleComplaint.pending]:(state)=>{
            state.loading=false;
            state.complaint=null;
            state.error=true;
        },
        [fetchSingleComplaint.fulfilled]:(state,action)=>{
            state.complaint=action.payload?.[0];
            state.error=false;
            state.loading=false;
        },
        [fetchSingleComplaint.rejected]:(state,action)=>{
            console.log(action.error.message);
            state.loading=false;
            state.complaint=null;
            state.error=action.error.message;
        },
    }
});
export default complaintSlice.reducer;