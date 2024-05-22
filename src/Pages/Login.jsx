import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate} from 'react-router';
import { useSelector } from "react-redux";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import login from "../assets/login.webp";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
const Login = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    userInfo && navigate("/");
  }, [userInfo]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [err,setErr]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data={
      user_email: email, user_password: password
    }
    await axios.post("https://cms-backend-two-alpha.vercel.app/users/login",data).then((res)=>{
      const result = res;
      console.log("efd",result)
      if(res.status===208){
        setErr(res.data.message)
        setTimeout(() => {
          setErr(null);
        }, 1000);
        return;
      }
      else{
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("role",res.data.role);
        localStorage.setItem("dept",res.data.dept);
        localStorage.setItem("user",JSON.stringify(res.data.user));
        window.location.reload();
        navigate("/")
        return;
      }
    })
  };
  // onSubmit={handleSubmit}
  return (
    <div className="Login">
      <div className="LoginWrap">
        <div className="LoginImg">
          <img src={login} alt="" />
        </div>
        <div className="LoginText">
          <Typography sx={{ textAlign: "center" }} variant="h3">
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
          {err && <p style={{ color: "red" }}>{err}</p>}
            <div className="email">
              <Typography>Enter Your Mail:</Typography>
              <TextField
              sx={{mt:1}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type={"email"}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="pass">
              <Typography sx={{mt:3}}>Enter Your Password:</Typography>

              <OutlinedInput
              sx={{mt:1}}
                id="outlined-adornment-password"
                label="Password"
                value={password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className="submit">
              <Button variant="contained" type="submit"  sx={{mt:4}}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
