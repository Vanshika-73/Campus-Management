import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

export default function Profile() {
  const {userInfo} = useSelector(state=>state.user);
  return (
    <div style={{width:"100%",height:"90vh",display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Card sx={{ border:"2px solid blue",p:2 }} className='profileCard'>
      <CardMedia
        component="img"
        alt={userInfo.username}
        height="60%"
        image={`http://localhost:1111/userPhoto/${userInfo.user_img}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:"center"}}>
          {userInfo.username}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {userInfo.user_email}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {userInfo.user_contact}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {userInfo.role}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign:"center"}}>
          {userInfo?.dept}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}