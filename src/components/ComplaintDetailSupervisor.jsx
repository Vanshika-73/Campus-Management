import { FormControl } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchSingleComplaint } from "../slices/complaintSlice";
import ReactToPrint from "react-to-print";

function ComplaintDetailSupervisor() {
  const componentRef = useRef();
  const navi = useNavigate();
  const {id} = useParams();
  const status_values = ["New", "Pending", "Solved"];
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleComplaint({id}));
  }, []);
  const {complaint} = useSelector(state=>state.complaints);

  const handleSubmit = () =>{
    axios({
        method:"put",
        url:`http://localhost:1111/complaints/${id}`,
        data:{
          status:status,
        }   
    })
    setStatus(null);
     navi(-1)
  }

  return (
    <>
      <div
        style={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          marginBottom: "2vh",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <ReactToPrint
          trigger={() => {
            return (
              <button
                className="print"
                style={{
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  width: "auto",
                }}
                 
              >
                Print
              </button>
            );
          }}
          content={() => componentRef.current}
          documentTitle="new document"
          pageStyle={"print"}
        />
        <div className="but">
          <button
            className="back"
            onClick={() => navi(-1)}
            style={{
              border: "1px solid black",
              backgroundColor: "transparent",
              width: "auto",
            }}
          >
            Go Back
          </button>
        </div>
      </div>

      <div ref={componentRef}>
        <div className="container" style={{margin:"o auto"}}>
          {/* <!--Section: Complain v.2--> */}
          <section >
            {/* <!--Section heading--> */}
            <h2 style={{textAlign:"center"}}>
              Sant Longowal Institute of Engineering and Technology
            </h2>
            {/* <!--Section description--> */}
            <p
              style={{ fontSize: "25px",textAlign:"center" }}
            >
              Complaint No: {complaint?.C_no}
            </p>

            <div style={{ width: "80%",margin:"60px auto 0 auto", display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",textAlign:"left" }}>
              <table style={{width:"100%"}}>
                <tbody className="complaintTable">
                  <tr>
                    <th>Name of Complainant:</th>
                    <td>{complaint?.complainant}</td>
                  </tr>
                  <tr>
                    <th>Location:</th>
                    <td>{complaint?.Location}</td>
                  </tr>
                  <tr>
                    <th>Date & Availability:</th>
                    <td>{complaint?.Date_time}</td>
                  </tr>
                  <tr>
                    <th>Complaint file Date:</th>
                    <td>{complaint?.file_date}</td>
                  </tr>
                  <tr>
                    <th>Wing:</th>
                    <td>{complaint?.wing}</td>
                  </tr>
                  <tr>
                    <th>Description of Complaint:</th>
                    <td>{complaint?.description}</td>
                  </tr>
                  <tr>
                    <th>Complaint Status:</th>
                    <td>
                    <div className="statusChange" style={{display:"flex"}}>
                 <select name="status" id="status" onChange={(e)=>{setStatus(e.target.value)}}>
                  <option value={complaint?.complaint_status}>{complaint?.complaint_status}</option>
                    {
                        status_values.map((item) => {
                            if (item !== complaint?.complaint_status) {
                                return <option value={item}>{item}</option>
                            }
                          })
                    }
                  </select>
                  <input style={{marginLeft:"15px",width:"150px"}} onClick={handleSubmit} disabled={(!status)} type="submit" value="Submit"/>
                 </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Assign To:</th>
                    <td>_______________</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </section>
          {/* <!--Section: complain v.2--> */}
        </div>
      </div>
    </>
  );
}

export default ComplaintDetailSupervisor;
