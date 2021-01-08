import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.png'
import { useStateValue } from './StateProvider'


function Header() {

    const [{ user }] = useStateValue();
    return (
        <nav className="header">
            <div className="header__logo1">
                <Link className="header__logo" to="/home">
                    < img src={logo} alt=" company logo" />
                    <div className="header__logo__text">
                        <span className="links"> GST Suvidha Kendra </span>
                        <span className="underlinks"> An Authorised GSP</span>
                        

                        <div className="phone">
                            <span className="email">services@gstinsuvidhakendra.com</span>
                        </div>

                    </div>
                </Link>
            </div>

            <div className="header__middle">
                
                <span>
                    Goods and Services Tax
                </span>
            </div>

            <div className="header__middle">
                <span>
                   {user?.email}
                </span>
            </div>

            {/* <div className="booking">
        <h1 className="title">
          Hii <span className="user__name">{user?.email}</span> , Your Potential
          Clients
        </h1>
       
      </div> */}


        </nav>
    )
}

export default Header
