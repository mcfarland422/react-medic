import React, { Component } from 'react';

class NavBar extends Component{

	render(){
		return(
			<div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">The Bike Medics</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  just-right" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bike Repair</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Bikes</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Contact
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">About</a>
                  <a className="dropdown-item" href="#">Testimonials</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
			</div>
		)
	}
}

export default NavBar;
