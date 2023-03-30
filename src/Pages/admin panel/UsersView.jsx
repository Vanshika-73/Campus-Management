import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
const UserView = () => {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();
 useEffect(()=>{
  axios.get("http://localhost:1111/users/").then((res)=>{
    setUsers(res.data);
  })
 },[])
 const deleteUser = async (username) => {
  console.log("deke",username);
  await axios.delete(`http://localhost:1111/users/${username}`,).then((result) => {
    if (result.status === 200) {
      alert("user deleted!");
      window.location.reload(false);
      // navigate('/home');
    }
  });
};
  createTheme(
    "solarized",
    {
      text: {
        primary: "white",
        secondary: "white",
      },
      background: {
        default: "#5c6bc0",
      },
    },
    "dark"
  );

  const columns = [
    {
      name:"Id",
      selector : (row) => row.id,
    },
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "View",
      cell: (row) => (
        <button
          className="btn"
          onClick={() => {
            navigate(`/users/${row.name}`);
          }}
        >
          View
        </button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          className="btn_delete"
          onClick={() => deleteUser(row.name)}
        >
          Delete
        </button>
      ),
    },
         
]

const data = [];
let i = 1;
users?.map((user) => {
  const work = {
    id:i,
    name: user.username,
    email: user.user_email,
    role: user.role,
  };
  i++;
  return data.push(work);
});
  return (
    <>
      
      <div
        className="container"
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "2.5em",
          margin: "0.5em",
        }}
      >
        Users LIST
      </div>
      
        <div
          style={{
            fontSize: "18px",
            border: "2px solid blue",
            display: "table",
            margin: "5px auto",
            padding: "5px",
            borderRadius: "8px",
          }}
        >
          <Link to="/useradd">
            <button type="button">Add New User</button>
          </Link>
        </div>

      <div
        style={{
          // border: "2px solid green",
          padding: "0.75em",
          borderRadius: "15px",
          background: "black",
          fontSize: "40px",
        }}
      >
        <DataTable
          columns={columns}
          data={data}
        //   data={workshops?.map((workshop) => {
        //     return {
        //       id: workshop._id,
        //       workshopName: workshop.workshopName,
        //       venue: workshop.workshopVenue,
        //       time: workshop.workshopTime,
        //       date: workshop.workshopDate,
        //       domain: workshop.domainName,
        //       registration: workshop.registrationLive,
        //     };
        //   })}
          //pagination
          theme="solarized"
        />
      </div>
    </>
  );
};

export default UserView;
