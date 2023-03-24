import React from 'react';
import { Button } from './Button';
import './css/HeroSection.css';
import './css/App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Thomas K. Kelemen, Ph.D.</h1>
      <p>An organizational behavior scholar, Thomas studies how to help employees flourish through their work.</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonsSize='btn--large' linkTo='/about-me'>
          About Me</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonsSize='btn--large' linkTo='/research/All'>
          View Publications</Button>
      </div>
    </div>
  )
}

export default HeroSection
