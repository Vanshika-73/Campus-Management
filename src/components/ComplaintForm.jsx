import { Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./ComplaintForm.css";

function ComplaintForm() {
  const {userInfo} = useSelector(state=>state.user);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState();
  const [wing, setWing] = useState("nature");
  const [elec, setElec] = useState("---Select---");
  const [des, setDes] = useState("");
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    document.querySelector(".elec").style.display = "none";
    document.querySelector(".civil").style.display = "none";
  }, []);
  const handleChange = () => {
    const values = {
      person:userInfo.username,
      complainant: name,
      wing: wing,
      wing_branch: elec,
      Date_time: dateTime,
      Location: location,
      description: des,
      contact: phone,
    };
    console.log("hrrr:", values);
     fetch("http://localhost:1111/complaints", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
    navigate('/history');
    return
  };

  const handleWing = (value) => {
    setWing(value);
    if (value === "Electrical") {
      document.querySelector(".elec").style.display = "block";
      document.querySelector(".civil").style.display = "none";
    } else if (value == "Civil") {
      document.querySelector(".elec").style.display = "none";
      document.querySelector(".civil").style.display = "block";
    } else {
      document.querySelector(".elec").style.display = "none";
      document.querySelector(".civil").style.display = "none";
    }
  };
  return (
    <div className="complaintForm">
      <form  className="complainForm" onSubmit={handleChange}>
        <div className="field">
          <label>Name of Complainant</label>
          <input type="text" name="firstName" required onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="field">
          <label>Location</label>
          <input type="text" name="Location" required onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div className="field">
          <label>Date & Time of Availability</label>
          <input type="datetime-local" name="datetime" required  onChange={(e) => setDateTime(e.target.value)}/>
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" required pattern="\d{10}" onChange={(e) => setPhone(Number(e.target.value))}/>
        </div>

        <div className="field">
          <label>Nature of Complaint</label>
          <Select
            sx={{ height: "40px", width: "20vw" }}
            value={wing}
            onChange={(e) => handleWing(e.target.value)}
          >
            <MenuItem value={"nature"}>Nature</MenuItem>
            <MenuItem value={"Civil"}>Civil</MenuItem>
            <MenuItem value={"Electrical"}>Electrical</MenuItem>
            <MenuItem value={"Horticulture"}>Horticulture</MenuItem>
            <MenuItem value={"Sanitation"}>Sanitation</MenuItem>
          </Select>
        </div>
        <div className="field elec">
          <Select
            sx={{ height: "40px", width: "20vw" }}
            value={elec}
            onChange={(e) => setElec(e.target.value)}
          >
            <MenuItem value={"---Select---"}>---Select---</MenuItem>
            <MenuItem value={"Internal"}>Internal</MenuItem>
            <MenuItem value={"External"}>External</MenuItem>
          </Select>
        </div>
        <div className="field civil">
          <Select
            sx={{ height: "40px", width: "20vw" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={elec}
            onChange={(e) => setElec(e.target.value)}
          >
            <MenuItem value={"---Select---"}>---Select---</MenuItem>
            <MenuItem value={"Masonry<"}>Masonry</MenuItem>
            <MenuItem value={"Carpentry"}>Carpentry</MenuItem>
            <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
            <MenuItem value={"Painting"}>Painting</MenuItem>
            <MenuItem value={"Any Other"}>Any Other</MenuItem>
          </Select>
        </div>
        <div className="field">
          <label>Brief description about Complaint</label>
          <textarea required maxLength="80" name="comments"  onChange={(e) => setDes(e.target.value)}/>
        </div>

        <button className="complainButton" type="submit">
          File Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
