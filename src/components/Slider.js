import React, { Component } from 'react';

class Slider extends Component{

	render(){
		return(
      // <div id="MedicsCarousel" className="carousel slide" data-ride="carousel">
      //   <div className="overlay-white"></div>
      //   <div className="carousel-inner">
      //     <div className="carousel-item active">
      //       <img className="d-block w-100" src="img/slider/bike-bridge.jpg" alt="First slide" />
      //     </div>
      //     <div className="carousel-item">
      //       <img className="d-block w-100" src="img/slider/bike-trails.jpg" alt="Second slide" />
      //     </div>
      //     <div className="carousel-item">
      //       <img className="d-block w-100" src="img/slider/mtns-fog.jpg" alt="Third slide" />
      //     </div>
      //   </div>
      // </div>


// nnnnn
      <div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
        {/* <!-- Overlay --> */}
        <div class="overlay"></div>

        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#bs-carousel" data-slide-to="1"></li>
          <li data-target="#bs-carousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner">
          <div class="item slides active">
            <div class="slide-1"></div>
            <div class="hero">
              <hgroup>
                  <h1>We are creative</h1>
                  <h3>Get start your next awesome project</h3>
              </hgroup>
              <button class="btn btn-hero btn-lg" role="button">See all features</button>
            </div>
          </div>
          <div class="item slides">
            <div class="slide-2"></div>
            <div class="hero">
              <hgroup>
                  <h1>We are smart</h1>
                  <h3>Get start your next awesome project</h3>
              </hgroup>
              <button class="btn btn-hero btn-lg" role="button">See all features</button>
            </div>
          </div>
          <div class="item slides">
            <div class="slide-3"></div>
            <div class="hero">
              <hgroup>
                  <h1>We are amazing</h1>
                  <h3>Get start your next awesome project</h3>
              </hgroup>
              <button class="btn btn-hero btn-lg" role="button">See all features</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default Slider;
