import React, { Component } from 'react';

class Slider extends Component{

	render(){
		return(
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="img/slider/bike-bridge.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="img/slider/bike-trails.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="img/slider/mtns-fog.jpg" alt="Third slide" />
          </div>
        </div>
      </div>
		)
	}
}

export default Slider;
