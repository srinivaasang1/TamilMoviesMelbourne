import React, { Component, PropTypes } from 'react';
import CollapseRecent from '../components/collapse-recent';

class Recent extends Component{
  render()
  {
    return(
      <div id="recent" className="">
        <CollapseRecent/>
      </div>
    );
  }
}

export default Recent;
