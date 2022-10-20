import React from "react";
import {Link} from 'react-router-dom';

const Nav=()=>{
     return(
        <>
<nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0 mb-5">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><p className="logo">My<span className="world">World</span></p></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse pages" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-2">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        {/* <li className="nav-item px-2">
          <Link to='/contactList' className="nav-link" >Contactlist</Link>
        </li> */}
        {/* <li className="nav-item px-2 dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item px-2">
          <Link to='/buy' className="nav-link" tabindex="-1" aria-disabled="true">Buy</Link>
        </li>
        <li className="nav-item px-2">
          <Link to='/contact' className="nav-link" tabindex="-1" aria-disabled="true">Contact Us</Link>
        </li>
        <li className="nav-item px-2">
          <Link to='/upload' className="nav-link" tabindex="-1" aria-disabled="true">Upload</Link>
        </li>
      </ul>
      <ul className="navbar-nav d-flex flex-row">
      <li className="nav-item me-3 me-lg-0">
        <a className="nav-link" href="#!">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </li>
      <li className="nav-item me-3 me-lg-0">
      <Link to='/userProfile' className="nav-link"><i class="fas fa-user"></i></Link>
        
      </li>
      <li className="nav-item me-3 me-lg-0">
        <Link to='/login' className="nav-link"> <i class="fas fa-sign-in"></i></Link>
      </li>
    </ul>
    </div>
  </div>
</nav>

</>


);
}

export default Nav;