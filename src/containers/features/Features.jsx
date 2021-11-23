import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'BCA',
    text: 'Bachelore of Com App is the course with blah balha blaj................',
  },
  {
    title: 'Bcom',
    text: ' There are fin comConsidered sympathize tsufecome he tended active enable to.',
  },
  {
    title: 'BA',
    text: 'Led ask possiikewise debge or am nothing amongst chiefly address.',
  },
  {
    title: 'BSC',
    text: 'Reallylt now. In built table in an rapid blush..',
  },
  {
    title: 'XY',
    text: 'Reallylt now. In built table in an rapid blush..',
  },
  {
    title: 'XY',
    text: 'Reallylt now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Your Future is in your hands, so take & ENjoy ur course.</h1>
      <p>Choose listed-<b>Under graduate</b> courses we provide</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
