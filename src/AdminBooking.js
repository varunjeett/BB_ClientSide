import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import ShowClients from "./ShowClients.js";
import "./AdminBooking.css";
import { useStateValue } from "./StateProvider.js";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function AdminBooking() {
  const [clients, setClients] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("info").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setClients(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo of BB" />
        </Link>
      </nav>

      <div className="booking">
        <h2>
          Hii <span className="user__name">{user?.email}</span> , Your Potential
          Clients
        </h2>
        {clients?.map((client) => (
          <ShowClients client={client} />
        ))}
      </div>
    </>
  );
}

export default AdminBooking;
