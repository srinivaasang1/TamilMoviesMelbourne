import React, { Component, PropTypes } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class CarouselUpcoming extends Component{
  render()
  {
    return(
      <div id="carousel-example-generic1" className="carousel slide carousel-upcoming" data-ride="carousel" data-interval="false">
        <div className="carousel-inner carousel-flex" role="listbox">
          <div className="item active">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-4">
                <img src="TamilMoviesMelbourne/../../assets/img/bahubali.jpg" alt="sarabeths"/>
              </div>
              <div className="col-md-4">
                <span className="movie-pills">Title</span>&nbsp;&nbsp;&nbsp;<span>Baahubali: The Conclusion</span><br/><br/>
                <span className="movie-pills">Genre</span>&nbsp;&nbsp;&nbsp;<span>Action, Adventure, History </span><br/><br/>
                <span className="movie-pills">Cast & Crew</span>&nbsp;&nbsp;&nbsp;<span>Prabhas, Rana Daggubati, Anushka Shetty</span><br/><br/>
                <span className="movie-pills">Plot</span>&nbsp;&nbsp;&nbsp;<span>When two opposite ends unite the rod breaks in between. When Shiva, the son of Bahubali realizes his past from Kattappa, he seeks to find consensus to his question : Why did Kattapa kill his father? This, Bahubali- the Conclusion showcases the answer and its consequences on the Mahishmati Kingdom when its roots are stirred.</span><br/><br/>
                <span className="movie-pills">Expected Release Date</span>&nbsp;&nbsp;&nbsp;<span>2017 feb</span><br/><br/>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-4">
                <img src="TamilMoviesMelbourne/../../assets/img/kashmora.jpg" alt="sarabeths"/>
              </div>
              <div className="col-md-4 clearfix">
                <span className="movie-pills">Title</span>&nbsp;&nbsp;&nbsp;<span>Kaashmora</span><br/><br/>
                <span className="movie-pills">Genre</span>&nbsp;&nbsp;&nbsp;<span>Fantasy, Horror</span><br/><br/>
                <span className="movie-pills">Cast & Crew</span>&nbsp;&nbsp;&nbsp;<span>Nayanthara, Karthi, Sri Divya</span><br/><br/>
                <span className="movie-pills">Plot</span>&nbsp;&nbsp;&nbsp;<span>Kaashmora (English: Deadly Spirit) is an upcoming Indian Tamil-language historic-horror-comedy film written and directed by Gokul. It features Karthi, Nayantara, Sri Divya and Manisha Yadav in the lead roles.Santhosh Narayanan composed the films score and soundtrack. The film is scheduled for a worldwide release on 28 October 2016.</span><br/><br/>
                <span className="movie-pills">Expected Release Date</span>&nbsp;&nbsp;&nbsp;<span>2017 feb</span><br/><br/>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-4">
                <img src="TamilMoviesMelbourne/../../assets/img/thodari.jpg" alt="sarabeths"/>
              </div>
              <div className="col-md-4">
                <span className="movie-pills">Title</span>&nbsp;&nbsp;&nbsp;<span>Thodari</span><br/><br/>
                <span className="movie-pills">Genre</span>&nbsp;&nbsp;&nbsp;<span>Adventure, Romance</span><br/><br/>
                <span className="movie-pills">Cast & Crew</span>&nbsp;&nbsp;&nbsp;<span> Dhanush, Keerthi Suresh, Nassar</span><br/><br/>
                <span className="movie-pills">Plot</span>&nbsp;&nbsp;&nbsp;<span>A cafeteria worker, a lovely young girl, and a gang of hijackers converge aboard a train.</span><br/><br/>
                <span className="movie-pills">Expected Release Date</span>&nbsp;&nbsp;&nbsp;<span>2016 sep</span><br/><br/>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          </div>
        </div>

        <a className="left carousel-control carousel-upcoming" href="#carousel-example-generic1" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control carousel-upcoming" href="#carousel-example-generic1" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default CarouselUpcoming;
