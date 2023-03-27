import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../slices/UserSlice";

function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(logout());
    navigate('/login');
    },[])
}

export default Logout;