import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div class="Header">
      <div class="container px-5">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src="./images/Logo_original_RGB.png"
              width="165"
              height="50"
              alt="WeRdevs"
              title="Home"
            />
          </a>

          <div class="" id="">
            <ul class="nav">
              <li class="nav-item active">
                <a class="nav-link" href="#" title="Home">
                  Home<span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" title="About Us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
