import React, { Component, PropTypes } from 'react';


class YoutubeFrame extends Component{
  render()
  {
    return(
      <div className="container-frame">
      <iframe src="//www.youtube.com/embed/Gs3widGw6Tw"
        frameBorder="0" allowFullScreen className="video" width="460" height="430"></iframe>

      </div>
    );
  }
}

export default YoutubeFrame;
