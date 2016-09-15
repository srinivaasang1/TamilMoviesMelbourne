import React, { Component, PropTypes } from 'react';

class Footer extends Component{
  render()
  {
    return(
      <div id="footer" className="footer-container">
      <a href='https://play.google.com/store/apps/details?id=srini.com.bbcradio&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="img-footer" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>

      <div className="fb-like" data-href="https://www.iamsrini.com" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
      </div>
    );
  }
}

export default Footer;
