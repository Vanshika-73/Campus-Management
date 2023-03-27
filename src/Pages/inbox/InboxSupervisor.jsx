import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ComplaintBar from '../../components/ComplaintBar';
import OneComplaint from '../../components/OneComplaint';


function InboxSupervisor() {
  const {dept} =useSelector(state=>state.user);
  const {allComplaints,loading} = useSelector(state=>state.complaints);
    let result=[];
      allComplaints?.map((v)=>{
        if(v.wing == dept && (v.complaint_status!='Solved')){
            result.push(v);
        }
    })
    
    return(
        <>
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
        </>
    )}
// }

export default InboxSupervisor;