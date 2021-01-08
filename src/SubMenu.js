import React from 'react'
import "./Menu.css";
import { Link } from 'react-router-dom'

function SubMenu() {
    return (
        <nav className="menu">
        <div className="header__second">
            
            <Link className="second__links" to="/gstplans">
                <span className="second__links">
                    BASIC
                </span >
            </Link>

            <Link className="second__links" to="/gstplans/standard">
                <span className="second__links">
                    STANDARD
                </span >
            </Link>

            <Link className="second__links" to="/gstplans/premium">
                <span className="second__links">
                    PREMIUM
                </span >
            </Link>

            <Link className="second__links" to="/gstplans/business">
                <span className="second__links">
                    BUSINESS
                </span >
            </Link>

            <Link className="second__links" to="/gstplans/unlimited">
                <span className="second__links">
                    UNLIMITED
                </span >
            </Link>
        </div>
    </nav>
    )
}

export default SubMenu
