import React, { Component, PropTypes } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Carousel extends Component{
  render()
  {
    return(
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img  className="img-carousel1" src="TamilMoviesMelbourne/../../assets/img/slider-3.jpg" alt="sarabeths"/>
            <div className="carousel-caption">
            <h1>Kabali The Beginning</h1>
            </div>
          </div>
          <div className="item">
            <img className="img-carousel1" src="TamilMoviesMelbourne/../../assets/img/slider-1.jpg" alt="sarabeths"/>
            <div className="carousel-caption">
            <h1>Kabali The Beginning</h1>
            </div>
          </div>
          <div className="item">
            <img className="img-carousel1" src="TamilMoviesMelbourne/../../assets/img/slider-3.jpg" alt="sarabeths"/>
            <div className="carousel-caption">
            <h1>Kabali The Beginning</h1>
            </div>
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
