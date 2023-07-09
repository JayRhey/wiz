import React, { useEffect } from 'react';
import './Header.css';
import M from 'materialize-css';
import logo from './navbar-logo-v2.png';
import products from '../../data/data';
import SubMenu from '../SubMenu/SubMenu';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = ({ productId }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const urlHome = () => {
     window.location.href = '/';
  }

  return (
    <div>
    <div className='navbar-fixed'>
      <nav className="nav-center nav-extended nav-custom">
        <div className="nav-wrapper container-fluid-custom">
          <Link to="/" className="brand-logo hide-on-large-only">
            <img src={logo} alt="" className="responsive-img" />
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="hide-on-med-and-down">
            <li>
              <div className="left">
                <img src={logo} alt="" className="logo responsive-img" onClick={ urlHome }/>
              </div>
            </li>
            <li>
                <Link to="/">
                  Home
                </Link>
            </li>
            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Product
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <SubMenu />    
              </div>
            </li>
             <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Support
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <SubMenu />    
              </div>
            </li>
            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shop
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <SubMenu />    
              </div>
            </li>
            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <SubMenu />    
              </div>
            </li>
            <li>
              <a href="#!">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  className="svg-inline--fa fa-magnifying-glass search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Product</a>
            </li>
            <li>
              <a href="#!">Support</a>
            </li>
            <li>
              <a href="#!">Shop</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="magnifying-glass"
                  className="svg-inline--fa fa-magnifying-glass search-icon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Navbar;
