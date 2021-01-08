import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Header from "./Header.js";
import Menu from "./Menu.js";
import PanBooking from "./PanBooking";
import MsmeBooking from "./MsmeBooking";
import GstBooking from "./GenBooking";
import EwayBooking from "./EwayBooking";
import FssaiBooking from "./FssaiBooking";
import SubMenu from "./SubMenu";
import Unlimited from "./Unlimited";
import Premium from "./Premium";
import Standard from "./Standard";
import Basic from "./Basic";
import Business from "./Business";
import BillSoftware from "./BillSoftware";
import BecomePartner from "./BecomePartner";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/PAN">
              <Header />
              <Menu />
              <PanBooking />
            </Route>

            <Route path="/MSME">
              <Header />
              <Menu />
              <MsmeBooking />
            </Route>

            <Route path="/fssai">
              <Header />
              <Menu />
              <FssaiBooking />
            </Route>

            <Route path="/E-way-Bill">
              <Header />
              <Menu />
              <EwayBooking />
            </Route>

            <Route path="/partner">
              <Header />
              <Menu />
              <BecomePartner />
            </Route>

            <Route path="/software">
              <Header />
              <Menu />
              <BillSoftware />
            </Route>

            <Route path="/gstplans/standard">
              <Header />
              <SubMenu />
              <Standard />
            </Route>

            <Route path="/gstplans/premium">
              <Header />
              <SubMenu />
              <Premium />
            </Route>

            <Route path="/gstplans/business">
              <Header />
              <SubMenu />
              <Business />
            </Route>

            <Route path="/gstplans/unlimited">
              <Header />
              <SubMenu />
              <Unlimited />
            </Route>

            <Route path="/gstplans">
              <Header />
              <SubMenu />
              <Basic />
            </Route>

            <Route path="/">
              <Header />
              <Menu />
              <GstBooking />
            </Route>
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
