import React, { useEffect, useState } from "react";
// import "./userAdd.css";
import axios from "axios";
import { useNavigate } from "react-router";
// import { baseUrl } from "../API/api";
// import Loader from "../components/Loader/Loader";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const UserAdd = () => {
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(false);
  const [role, setRole] = useState("0");
  const [dept, setDept] = useState("dept");
  const [phoneErr,setPhoneErr] = useState("");
  const [err,setErr] = useState("");
  const [password,setPassword] = useState("");
  const navigate=useNavigate();
  const postData = async() => {
    const formData = new FormData();
    if(name=="" || photo==null || email=="" || contact==false || role=='0' || password==""){
      alert("Please fill all the required fields");
      return;
    }
    if(role=="Supervisor" &&  dept=="dept"){
      alert("Please choose the department for the supervisor");
      return;
    }
    if (contact.length < 10) {
      setPhoneErr("Invalid phone number!");
      setTimeout(() => {
        setPhoneErr(null);
      }, 3000);
      return;
    }
    if (contact.length > 10) {
      setPhoneErr("Invalid phone number!");
      setTimeout(() => {
        setPhoneErr(null);
      }, 3000);
      return;
    }
    formData.append("name",name);
    formData.append("role",role);
    formData.append("userPhoto",photo);
    formData.append("phone",Number(contact));
    formData.append("email",email);
    formData.append("password",password);
    formData.append("dept",dept);
    // const user ={
    //   name:name,
    //   role:role,
    //   user_img:photo,
    //   phone:contact,
    //   email:email
    // }
    await axios.post("http://localhost:1111/users",formData).then((res)=>{
      console.log("user",res);
      if(res.status==208){
        setErr(res.data.message);
      setTimeout(() => {
        setErr(null);
        navigate("/usersview")
      }, 3000);
      return;
      }
      else{
        navigate("/usersview")
      }
    })
  }
  return (
    <div className="workshopAdd" >
     
      <div
        className="container"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.5em",
        }}
      >
        Add User
      </div>

      <div className="workshopItems" style={{display:"flex",justifyContent:"space-evenly",alignItems:"baseline",flexDirection:"column",height:"50vh",width:"80%",paddingLeft:"30%"}}>
      {err && <h2 style={{color:"red"}}>{err}</h2>}
        <label>
          Name :{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </label>
        <label>
          Phone Number :{" "}
          <input
            type="tel"
            onChange={(e) => setContact(e.target.value)}
            name="contact"
            required
          />
        </label>
        {phoneErr && <h6 style={{color:"red"}}>{phoneErr}</h6>}
        <label>
          Password :{" "}
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </label>
        <label>Choose Role : 
        <select
          id="role"
          required
          name="role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="0">Select</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Professor">Professor</option>
        </select>
        </label>
        {
            (role==="Supervisor") ? <label for="dept">Choose Department : 
            <select
              id="dept"
              name="dept"
              required
              onChange={(e) => {
                setDept(e.target.value);
              }}
            >
              <option value="0">Select</option>
              <option value="Civil">Civil</option>
              <option value="Horticulture">Horticulture</option>
              <option value="Electrical">Electrical</option>
              <option value="Sanitation">Sanitation</option>
            </select>
            </label> : ""
        }
        <div className="photoUpload">
          User Picture:
          <input
            style={{ border: "none" }}
            type="file"
            required
            onChange={(e) => setPhoto(e.target.files[0])}
            accept="/Image/*"
          />
        </div>
      <button type="button" className="submit-btn" onClick={postData} style={{padding:"10px"}}>
        Submit
      </button>
      </div>
      
    
    </div>
  );
};

export default UserAdd;
