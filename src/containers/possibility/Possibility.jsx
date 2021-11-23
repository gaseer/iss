import React from 'react';
import principal from '../../assets/prince.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={principal} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Backbone of ISS</h4>
      <h1 className="gradient__text">PRINCIPAL, Teachers and Managment</h1>
      <p>The main backbones of this institution are above mentioned members. They sacrifies a lot to make things better and make it work.</p>
      <h4>WE TRULY CARE FOR EACH AND EVERY STUDENTS </h4>
    </div>
  </div>
);

export default Possibility;
