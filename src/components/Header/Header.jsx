import React from 'react';
import './Header.scss';
import logo from '../../images/Logo_original_RGB.png';
import { Link, NavLink } from 'react-router-dom'; 


export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__container container-fluid">
        <nav className="navbar navbar-light">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="WeRdevs"
              title="Home"
            />
          </Link>

          <div class="" id="">
            <ul class="nav">
              <li class="nav-item">
                <NavLink className="nav-link" to="/" exact title="Home">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/about" title="About Us">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
