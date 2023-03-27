import React from "react";
import { useSelector } from "react-redux";
import ComplaintBar from "../../components/ComplaintBar";
import OneComplaint from "../../components/OneComplaint";

function HistoryProf() {
  const { allComplaints, loading } = useSelector((state) => state.complaints);
  const { userInfo } = useSelector((state) => state.user);

  let result = [];
  allComplaints?.map((v) => {
    let name = v.person;
    if (name.includes(userInfo.username)) {
      result.push(v);
    }
  });
    return (
      <div className="history">
      <h1 style={{textAlign:"center",marginTop:"10px",textDecoration:"underline"}}>History</h1>
      <ComplaintBar/>
        <div className="historyBody">
          {result.map((v) => {
            return (
              <OneComplaint
                assign={v.assign_to}
                full={v}
                no={v.C_no}
                status={v.complaint_status}
                wing={v.wing}
                comp={v.description}
                date={v.file_date}
              />
            );
          })}
        </div>
      </div>
    );
  }
// }

export default HistoryProf;
