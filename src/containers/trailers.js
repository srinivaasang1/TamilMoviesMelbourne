import React, { Component, PropTypes } from 'react';
import YoutubeFrame from '../components/youtube-frame';

class Trailers extends Component{
  render()
  {
    return(
      <div id="trailers" className="container">
        <YoutubeFrame/>
      </div>
    );
  }
}

export default Trailers;
