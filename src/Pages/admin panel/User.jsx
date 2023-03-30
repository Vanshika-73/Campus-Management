import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';

export default function User() {
    const paramsId=useParams();
    console.log("params",paramsId.username);
    const [user,setUser] = useState(null);
    useEffect( ()=>{
        console.log("heheeheh");
     axios.get(`http://localhost:1111/users/${paramsId.username}`).then((res)=>{
            console.log("user",res);
    setUser(res.data[0]);
  })
    },[])
    console.log("user",user)
  return (
    <div style={{width:"100%",height:"90vh",display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Card sx={{ border:"2px solid blue",p:2 }} className='profileCard'>
      <CardMedia
        component="img"
        alt={user?.username}
        height="60%"
        image={`http://localhost:1111/${user?.user_img}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:"center"}}>
          {user?.username}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {user?.user_email}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {user?.user_contact}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {user?.role}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {user?.dept}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}