import React, { Component, PropTypes } from 'react';
import Carousel from '../components/carousel';

class Home extends Component{
  render()
  {
    return(
      <div id="home" className="carousel-container">
        <Carousel/>
      </div>
    );
  }
}

export default Home;
