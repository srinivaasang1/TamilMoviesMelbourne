import React, { Component, PropTypes } from 'react';

class ContactUs extends Component{
  render()
  {
    return(
      <div id="contact" className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title st-center">
              <h3>Contact Us</h3>
              <p>Get in Touch with Us</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="contact-form" role="form">
              <input type="text" className="form-control" id="fname" name="fname" placeholder="Your Full Name"/>
              <input type="email" className="form-control" id="email" name="email" placeholder="Your E-mail"/>
              <input type="text" className="form-control" id="subj" name="subj" placeholder="Your Subject"/>
              <textarea id="mssg" name="mssg" placeholder="Your Message" className="form-control" rows="10"></textarea>
              <button className="btn btn-main btn-lg" type="submit" id="send" data-loading-text="<i className='fa fa-spinner fa-spin'></i> Sending..."><i className="fa fa-paper-plane "></i> Send</button>
            </form>
            <div id="result-message" role="alert"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
