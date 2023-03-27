import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
const UserView = () => {
  const [workshops, setWorkshops] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
 
  createTheme(
    "solarized",
    {
      text: {
        primary: "white",
        secondary: "white",
      },
      background: {
        default: "black",
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "iD",
      selector: (row) => row.id,
    },
    {
      name: "User Name",
      selector: (row) => row.workshopName,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Domain",
      selector: (row) => row.domain,
    },
    {
      name: "Venue",
      selector: (row) => row.venue,
    },
    {
      name: "View",
      cell: (row) => (
        <button
          className="btn"
          onClick={() => {
            navigate(`/workshop/${row.id}`);
          }}
        >
          View
        </button>
      ),
    },
   
         
]

const data = [{
    iD: "name",
    Domain: "email"
}]
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
          <Link to="/workshopadd">
            <button type="button">Add New Workshop</button>
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
