import React from 'react'

function ComplaintBar() {
  return (
    <div className="heading" style={{width:"90%",display:"flex",alignItems:"center",margin:"20px auto",justifyContent:"space-around",textAlign:"left"}}>
            <h6 className="no bardiv" style={{fontSize:"17px",fontWeight:"bold"}}>Comp. No.</h6>
            <h6  className="wing bardiv" style={{fontSize:"17px",fontWeight:"bold"}}>Wing</h6>
            <h6  className="comp" style={{fontSize:"17px",fontWeight:"bold"}}>Comp_Description</h6>
            <h6 className="date bardiv" style={{fontSize:"17px",fontWeight:"bold"}}>Date</h6>
            <h6  className='bardiv' style={{fontSize:"17px",fontWeight:"bold"}}>Status</h6>
          </div>
  )
}

export default ComplaintBar;