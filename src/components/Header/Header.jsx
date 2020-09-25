import React from 'react';
import './Header.scss';
// import '../../images/'

export const Header = () => {
  return (
    <div class="Header">
      <div class="container px-5">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src="../../images/Logo_original_RGB.png"
              width="30"
              height="30"
              alt=""
            />
          </a>
        </nav>
      </div>
    </div>
  );
}
