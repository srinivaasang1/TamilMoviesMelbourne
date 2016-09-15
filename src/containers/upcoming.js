import React, { Component, PropTypes } from 'react';
import CarouselUpcoming from '../components/carousel-upcoming';

class Upcoming extends Component{
  render()
  {
    return(
      <div id="upcoming" className="carousel-container">
        <CarouselUpcoming/>
      </div>
    );
  }
}

export default Upcoming;
