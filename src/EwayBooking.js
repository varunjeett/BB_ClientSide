import React, { useEffect, useState } from "react";
import "./EwayBooking.css";
import { db } from "./firebase.js";
import ShowClients from "./ShowClients";

function EwayBooking() {
  const [clients, setClients] = useState([]);
  const [searchItem, setSearch] = useState("");

  useEffect(() => {
    db.collection("Ewaybill")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setClients(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="booking">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder=" Type To Search"
        value={searchItem}
        onChange={(e) => {
          setSearch(e.target.value.toLocaleLowerCase());
        }}
      />
      {clients
        .filter((client) => {
          return (
            client.data.name.toLowerCase().includes(searchItem) ||
            String(client.data.number).includes(searchItem) ||
            (client.data.email && client.data.email.includes(searchItem))
          );
        })
        ?.map((client) => (
          <ShowClients client={client} caller="Ewaybill" />
        ))}
    </div>
  );
}

export default EwayBooking;
