import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchSingleComplaint } from "../slices/complaintSlice";
import ReactToPrint from 'react-to-print';

function ComplaintDetail() {
  const componentRef = useRef();
  const navi = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("det", id);
    dispatch(fetchSingleComplaint({ id }));
  }, []);
  const { complaint } = useSelector((state) => state.complaints);
  return (
    <>
      <div
        style={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          marginBottom: "2vh",
          justifyContent: "space-between",
          marginTop: "30px",
          height:"100%",
          margin:"30px auto"
        }}
      >
        <ReactToPrint
        trigger={()=>{
            return <button className="print" style={{border:"1px solid black",backgroundColor:"transparent",width:"5vw"}}>
            Print
        </button>
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
              width: "5vw",
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
                    <td>{complaint?.complaint_status}</td>
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

export default ComplaintDetail;
