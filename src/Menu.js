import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <nav className="menu">
            <div className="header__second">
                
                <Link className="second__links" to="/">
                    <span className="second__links">
                        GENERAL
                    </span >
                </Link>

                <Link className="second__links" to="/gstplans">
                    <span className="second__links">
                        GST PLANS
                    </span >
                </Link>

                <Link className="second__links" to="/fssai">
                    <span className="second__links">
                        FSSAI
                    </span >
                </Link>

                <Link className="second__links" to="/MSME">
                    <span className="second__links">
                        MSME / UDYAM
                    </span >
                </Link>

                <Link className="second__links" to="/E-way-Bill">
                    <span className="second__links">
                        E Way Bill
                    </span >
                </Link>

                <Link className="second__links" to="/PAN">
                    <span className="second__links">
                        PAN Card
                    </span >
                </Link>

                <Link className="second__links" to="/software">
                    <span className="second__links">
                        Billing  Software 
                    </span >
                </Link>                
                
                <Link className="second__links" to="/partner">
                    <span className="second__links">
                        Become Partner
                    </span >
                </Link>

            </div>
        </nav>
    )
}

export default Menu
