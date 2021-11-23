import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="ABOUT US" text="We had completed 9 years of academic period and still continuing journey towards excellence.  college is a multi-faculty college with Science & Arts facultyg The college has adequate infrastructural facilities – class rooms, library, computer laboratory, playground etc. Apart from the regular teaching the college strives for different activities. The NSS unit is an asset to the college. This unit conducts various extension activities to help our students become aware of their social responsibilities." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">VISION, MISSION & FOOTBALL </h1>
      <p>Truly dedicated for STUDENTS.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="VISION" text="To provide affordable quality education, while equipping students with knowledge and skills in their chosen stream, inculcate values, identify hidden talents, provide opportunities for students to realize their full potential and thus shape them into future leaders, entrepreneurs and above all good human beings.." />
      <Feature title="MISSION" text="Educate, inspire and prepare each student for a life of service and success. To fulfill this Mission we offers; academic programs, practical experience and co-curricular activities in a variety of settings to students from diverse backgrounds, the College leads students to gain an awareness of the world, to acquire knowledge of career and vocation and to seek truth and social justice." />
      <Feature title="FOOTBALL" text="Any student of this college will proudly praise our contribution towards FOOTBALL, because we had achieved 4th position in the University level FOOTBALL tournament. Shameer Sir our physical trainer dedicate a lot to train every students to make this happen and made many future ." />
    </div>
  </div>
);

export default WhatGPT3;
