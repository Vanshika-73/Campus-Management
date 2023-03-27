import { configureStore} from "@reduxjs/toolkit";
import complaintSliceReducer from "./slices/complaintSlice.js";
import userReducer from './slices/UserSlice.js';
const store = configureStore({
    reducer:{
        user:userReducer,
        complaints:complaintSliceReducer
    }
})

export default store;