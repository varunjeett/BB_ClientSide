import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route } from "react-router-dom";
import AdminBooking from "./AdminBooking.js";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Route path="/">
            <AdminBooking />
          </Route>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
