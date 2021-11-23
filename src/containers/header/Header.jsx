import React from 'react';
import iss from '../../assets/college.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> ISS Arts and Science College</h1>
      <p>Islamic Service Society (ISS) Arts and Science College is a self financing institution affiliated to the University of Calicut. The college was established in 2012 for providing higher education to the students. </p>
    </div>
    <div className="gpt3__header-image">
      <img src={iss} alt="iss img" />
    </div>
  </div>
);

export default Header;
