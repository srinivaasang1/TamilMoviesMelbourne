import React, { Component, PropTypes } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends Component{
  render()
  {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><span id="logo1">TamilMovies</span><br/>Melbourne</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home" className="active">HOME</a></li>
              <li><a href="#upcoming">UPCOMING</a></li>
              <li><a href="#recent">RECENT</a></li>
              <li><a href="#trailers">TRAILERS</a></li>
              <li><a href="#contact">CONTACT US</a></li>
              <li><a href="#">REGISTER</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
