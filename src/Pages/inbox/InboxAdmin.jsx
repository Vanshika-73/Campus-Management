import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ComplaintBar from '../../components/ComplaintBar';
import OneComplaint from '../../components/OneComplaint';

function InboxAdmin() {
    let result=[];
  const {allComplaints,loading} = useSelector(state=>state.complaints);
    allComplaints?.map((v)=>{
        if( (v.complaint_status!='Solved')){
            result.push(v);
        }
    }
    )
    if(loading){
        return(<div style={{height:"100vh",width: "100%",display: "flex",   justifyContent: "center",alignItems:"center" }}>
          <ClipLoader color="#000000" size={70} />
        </div>)
      }
      else{
    return(
        <div>
          <h1 style={{textAlign:"center",marginTop:"10px",textDecoration:"underline"}}>Inbox</h1>
         <ComplaintBar/>
        {
        result.map((v)=>{
            return(
            <OneComplaint
              assign= {v.assign_to}
                full = {v}
                no = {v.C_no}
                status={v.complaint_status}
                wing={v.wing}
                comp={v.description}
                date={v.file_date}
              />)
        })
        }
        </div>
    )}
}

export default InboxAdmin;