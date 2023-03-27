import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getUser= JSON.parse(localStorage.getItem('user'));
const getDept= localStorage.getItem('dept');
const getRole= localStorage.getItem('role');
const getToken= localStorage.getItem('token');

const initialState = {
    userInfo: getUser,
    dept:getDept,
    role:getRole,
    token:getToken,
    error : false
}
// export const loginUser= createAsyncThunk("user/loginUser", (data)=>{
//     return axios.post("http://localhost:1111/users/login",data).then((res) =>res.data).catch((err)=>{
//         throw new Error(err.response.data.message);
//         alert(Error)
// });
// });

const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:(state)=>{
            state.userInfo = null;
            state.error = false;
            state.dept=null;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("dept");
            localStorage.removeItem("token");
            localStorage.removeItem("role");
        }
    },
    // extraReducers:{
    //     [loginUser.pending]:(state)=>{
    //         state.userInfo=null;
    //         state.dept=null;
    //         state.role=null;
    //         state.token=null;
    //         state.user=null;
    //         state.error=false;
            
    //     },
    //     [loginUser.fulfilled]:(state,action)=>{
    //         console.log(action.payload);
    //         state.userInfo=action.payload?.user;
    //         state.error= false;
    //         localStorage.setItem("userInfo",JSON.stringify(action.payload?.user));
    //         localStorage.setItem("role",JSON.stringify(action.payload?.role));
    //         localStorage.setItem("token",JSON.stringify(action.payload?.token));
    //         localStorage.setItem("dept",JSON.stringify(action.payload?.dept));

    //     },
    //     [loginUser.rejected]:(state,action)=>{
    //         state.error=action.error.message;
    //         state.userInfo=null;
    //         state.dept=null;
    //         state.role=null;
    //     },


    // }
});
export const {logout}= userSlice.actions;
export default userSlice.reducer