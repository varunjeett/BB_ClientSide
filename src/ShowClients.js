import React from "react";
import "./ShowClients.css";

function ShowClients({ client }) {
  return (
    <div className="show__Booking">
      <h1>Name : {client.data.name}</h1>

      <h3>Phone Number : {client.data.number}</h3>

      <h3>Email : {client.data.email}</h3>

      <h3>ID : {client.id}</h3>
    </div>
  );
}

export default ShowClients;
