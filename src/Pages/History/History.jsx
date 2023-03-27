import React, { useEffect } from "react";
import "./history.css";
import HistoryAdmin from './HistoryAdmin';
import HistorySupervisor from './HistorySupervisor';
import HistoryProf from './HistoryProf';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComplaints } from "../../slices/complaintSlice";
function History() {
   const {user} = useSelector(state=>state.users);
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchAllComplaints());
   }, [])
 if (user?.role=='Professor') {
    return(<HistoryProf/>)
 }

 else if(user?.role=='Admin'){
 
  return( <HistoryAdmin/>)
 }

 else if(user?.role=='Supervisor'){
 
  return( <HistorySupervisor/>)
 }
}

export default History;
