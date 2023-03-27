import React from 'react'
import { useSelector } from 'react-redux';
import ComplaintBar from '../../components/ComplaintBar';
import OneComplaint from "../../components/OneComplaint";

function HistoryAdmin() {
  const {allComplaints,loading} = useSelector(state=>state.complaints);
  let solve=[];
  allComplaints?.map((v)=>{
    if(v.complaint_status=='Solved'){
      solve.push(v);
    }
  })
  
    return (
      <>
      <h1 style={{textAlign:"center",marginTop:"10px",textDecoration:"underline"}}>History</h1>
      <ComplaintBar/>
      {
        solve.map((v) => {
          return (
            <OneComplaint
              // full = {v}
              no = {v.C_no}
              status={v.complaint_status}
              wing={v.wing}
              comp={v.description}
              date={v.file_date}
            />
          );
        })
      }
      </>
    )
  }


export default HistoryAdmin
