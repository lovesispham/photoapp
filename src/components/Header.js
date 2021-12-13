import React from "react";
import {Link, useLocation} from 'react-router-dom'
import  logo  from "../assets/img/logo.png";

const mainMenu = [
    {
        display:"Home",
        path:'/'
    },
    {
        display:"Gallery",
        path:'/photo'
    }
]

const Header = () => {
const {pathname} = useLocation()
const activeNav = mainMenu.findIndex(e => e.path === pathname)
  return (
    <div className="header">
      <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="nav navbar-nav">
        {mainMenu.map((item, index) => (
          <li
            className={`level1 ${index === activeNav ? "active" : ""}`}
            key={index}
            
          >
            <Link to={item.path}>{item.display}</Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Header;
