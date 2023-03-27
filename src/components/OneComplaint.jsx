import { Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import './Style.css';
function OneComplaint(props) {
  const navi = useNavigate();
  return (
    <div style={{width:"100%",margin:"10px auto"}}>
        <Paper sx={{width:"90%",height:"8vh",display:'flex',justifyContent:"space-around",alignItems:"center",margin:"0px auto",textAlign:"left"}}  elevation={3}>
            <div className="no bardiv" onClick={()=>navi(`/detail/${props.no}`)}>
                {props.no}
            </div>

            <div className="wing bardiv" onClick={()=>navi(`/detail/${props.no}`)}>
                {props.wing}
            </div>

            <div className="comp" onClick={()=>navi(`/detail/${props.no}`)}>
               {props.comp}
            </div>

            <div className="date bardiv">
               {props.date}
            </div>
            {/* <div className="stats"  style={{width:"30px",height:"30px",borderRadius:"50%"}} > */}
              <div className='bardiv' onClick={()=>navi(`/detail/${props.no}`)} >{props.status}</div>
            {/* </div> */}
            {/* <button style={{border:"none",width:"120px"}}>{props.assign}</button> */}
        </Paper>
      
    </div>
  )
}

export default OneComplaint;