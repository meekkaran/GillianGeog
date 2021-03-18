import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBMask, MDBView } from 'mdbreact';
import {Carousel} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import '../App.css';
import './Home.css';

function Home() {
    return (
        <div className='hero-container'>
            <Carousel>
          <Carousel.Item interval={3000}>
          <MDBView src="../images/d.jpg">
            <MDBMask overlay="green-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>I'M A NATIONAL GEOGRAPHIC EXPLORER </h2>
              <h2 className="head2" style={{fontSize:'70'}}>WELCOME TO MY HODOPHILE WORLD</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>LET'S EPLORE THE PLACES THAT I'M YET TO TRAVEL
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../images/b.jpg">
            <MDBMask overlay="green-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>I'M A NATIONAL GEOGRAPHIC EXPLORER </h2>
              <h2 className="head2" style={{fontSize:'70'}}>WELCOME TO MY HODOPHILE WORLD</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>LET'S EPLORE THE PLACES THAT I'M YET TO TRAVEL
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../images/a.jpg">
            <MDBMask overlay="green-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}} >I'M A NATIONAL GEOGRAPHIC EXPLORER </h2>
              <h2 className="head2" style={{fontSize:'70'}}>WELCOME TO MY HODOPHILE WORLD</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>LET'S EPLORE THE PLACES THAT I'M YET TO TRAVEL
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          </Carousel>


           <images>
           <div style={{paddingBottom:'2em'}}>
          <h1 style={{textAlign:'center'}}>MANIFESTING MY FAVOURITE DESTINATIONS</h1>
          <p style={{textAlign:'center'}}>My Top 9 DESTINATIONS</p>
          </div>
          <div className="row team_inner">
                <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/Mount_kenya.jpg" />
                <div className="team-name">
                  <h4>Explore the largest mountain in kenya</h4>
                  <p>Mt. Kenya</p>
                </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/eiffelTower.jpg" />
                <div className="team-name">
                  <h4>Travel through Eiffel tower in Paris</h4>
                  <p>Luxury</p>
                </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/disneyworld.jpg" />
                <div className="team-name">
                  <h4>Travel through Disney world in florida</h4>
                  <p>Luxury</p>
                </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/maramigration.jpg" />
                <div className="team-name">
                  <h4>Watch the wilderbeasts migration in Mara Kenya</h4>
                  <p>Adventure</p>
                </div> </div></div></div>
            </div>

            <div className="row team_inner">
                <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/tumpaksewuWaterfall.jpg"/>
                <div className="team-name">
                  <h4>Explore the Tumpak Sewu waterfall in Arizona</h4>
                  <p>Luxury</p>
                </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/sahara.jpg" />
                <div className="team-name">
                  <h4>Travel through sahara desert in North Africa</h4>
                  <p>Luxury</p>
                </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/cavehouse.jpg"/>
                <div className="team-name">
                  <h4>Explore Randys cave home in Arizona</h4>
                  <p>Explore</p>
                </div> </div></div></div>

                  <div className="col-lg-3 col-md-6">
                <div className="team-item">
                <div className="team-img">
                <img className="img-fluid" src="../images/atlanticOcean.jpeg"/>
                <div className="team-name">
                  <h4>Rravel through Atlantic Ocean</h4>
                  <p>Adventure</p>
                </div> </div></div></div>
            </div>
           </images>
          
        </div>
    );
}

export default Home
