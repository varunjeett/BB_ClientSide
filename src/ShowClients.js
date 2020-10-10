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
        <h3>
          Phone Number :
          <a className={"contact__link"} href={`tel: ${client.data.number}`}>
            {client.data.number}
          </a>
          
        </h3>

        <h3>
          Email :
          <a
            className={"contact__link"}
            href={`mailto: ${client.data.email}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {client.data.email}
          </a>
        </h3>

        <h4>ID : {client.id}</h4>
      </div>
      <div onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
        <h4>Delete Permanently</h4>
      </div>
    </div>
  );
}

export default ShowClients;
