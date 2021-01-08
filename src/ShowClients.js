import React, { useState } from "react";
import "./ShowClients.css";
import Button from "@material-ui/core/Button";
import { db } from "./firebase.js";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete"


function ShowClients({ client, caller }) {

  const [note, setNote] = useState(client.data.note);
  const val = new Date(client.data.timestamp);

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const a = val.toLocaleDateString();
  const b = val.toLocaleTimeString();

  const updateNote = (e) => {
    db.collection(caller).doc(client.id).set({
      name: client.data.name,
      number: client.data.number,
      email: client.data.email,
      timestamp: client.data.timestamp,
      note: note,
    });
  };

  const deleteDoc = (e) => {
    e.stopPropagation();
    db.collection(caller).doc(client.id).delete();
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

        <h3>Date : {a}</h3>

        <h3>Time : {b}</h3>

        <h3>Write Your Notes Here :</h3>
        <div className="notebox">
          <textarea
            placeholder='Press "Update" To Save Your Changes'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={updateNote}
            startIcon={<SaveIcon />}
          >
            Update
          </Button>
        </div>
      </div>

      <div onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
        <h4>Delete Permanently</h4>
      </div>
    </div>
  );
}

export default ShowClients;
