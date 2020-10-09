import React from "react";
import "./ShowClients.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "./firebase.js";

function ShowClients({ client }) {
  
  const deleteDoc = (e) => {
    e.stopPropagation();
    db.collection("info").doc(client.id).delete();
  };

  return (
    <div className="ShowClients">
      <div className="show__Booking">
        <h1>Name : {client.data.name}</h1>
        <h3>Phone Number : {client.data.number}</h3>
        <h3>Email : {client.data.email}</h3>
        <h3>ID : {client.id}</h3>
      </div>
      <div onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
        <h4>Delete Permanently</h4>
      </div>
    </div>
  );
}

export default ShowClients;
