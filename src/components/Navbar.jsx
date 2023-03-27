import React, { useState } from "react";
import { useNavigate} from 'react-router';
import {WorkHistorySharp,PersonRounded, LoginOutlined, AddCircle, RoofingOutlined } from "@mui/icons-material";
// import "./styles.css";
import {AppBar,Toolbar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles,CssBaseline, Drawer,  Typography} from "@mui/material";
import {Apps, Menu, ContactMail, AssignmentInd, Home} from "@mui/icons-material";
import { useSelector } from "react-redux";


const listItems = [
  {
    listIcon: <AddCircle />,
    listText: "Complaint",
    navi:'/complaint'
  },
  {
    listIcon: <WorkHistorySharp />,
    listText: "History",
    navi:'/history'
  },
  {
    listIcon: <PersonRounded />,
    listText: "Profile",
    navi:'/profile'
  },
  {
    listIcon: <LoginOutlined />,
    listText: "Logout",
    navi:'/logout'
  }
];
const listItemsAdmin = [
  {
    listIcon: <RoofingOutlined />,
    listText: "Inbox",
    navi:'/inbox'

  },
  {
    listIcon: <WorkHistorySharp />,
    listText: "History",
    navi:'/history'
  },
  {
    listIcon: <PersonRounded />,
    listText: "Profile",
    navi:'/profile'
  },
  {
    listIcon: <LoginOutlined />,
    listText: "Logout",
    navi:'/logout'
  }
];
export default function Navbar() {
  const navigate = useNavigate()
  const { role } = useSelector((state) => state.user);
  console.log("ada",role);
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className="menuSliderContainer" component="div">
      <Divider />
      <List sx={{pt:14,pl:2}}>
        {
          (role==="Professor")? listItems.map((listItem, index) => (
            <ListItem className="listItem" button key={index} onClick={()=>navigate(listItem.navi)}>
              <ListItemIcon sx={{color:"tan"}} className="listItem">
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText className="listItem" primary={listItem.listText} />
            </ListItem>
          )) : 
          listItemsAdmin.map((listItem, index) => (
            <ListItem className="listItem" button key={index} onClick={()=>navigate(listItem.navi)}>
              <ListItemIcon sx={{color:"tan"}}  className="listItem">
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText className="listItem" primary={listItem.listText} />
            </ListItem>
          ))
        }
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography>Campus Management</Typography>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
