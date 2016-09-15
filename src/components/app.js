import React, { Component } from 'react';


import Header from './header';
import Home from '../containers/home';
import Upcoming from '../containers/upcoming';
import Recent from '../containers/recent';
import Trailers from '../containers/trailers';
import ContactUs from '../containers/contact-us';
import Footer from '../containers/footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <Upcoming/>
        <Recent/>
        <Trailers/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}
