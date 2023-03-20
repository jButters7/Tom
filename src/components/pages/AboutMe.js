import React from 'react';
import '../../components/AboutMe.css';
import tom from '../image/t-kelemen.jpeg';

export default function AboutMe() {

  return <div>
    <h1 className='about-me-title'>Thomas Kelemen, PhD</h1>
    <div className="about-me-container">
      <div className='about-me-text'>
        <p>Thomas Kelemen is an Assistant Professor of Management at Kansas State University's College of Business. His research interests focus on leadership, organizational citizenship behavior, and job design. His work has been published in Academy of Management Journal, Personnel Psychology, Journal of Organizational Behavior, The Leadership Quarterly, Harvard Business Review, among other outlets. He also currently serves on the editorial board of the Journal of Organizational Behavior.</p>
        <p>In 2020, Thomas received his Ph.D. from the University of Oklahoma – Boomer Sooner!</p>
        <p>Prior to pursuing his doctoral degree, Thomas worked as a math teacher at Centennial Middle School in Oklahoma City as a corps member for Teach For America. He also worked at the American Action Forum think tank in Washington D.C. on economic and housing policy.</p>
        <p>Beyond work, Thomas is a proud father of three: Dan, Margot, and Millie. He and his wife Jessica love playing board games, playing racquetball and pickleball, reading, hiking, and watching survivor (yes, the show is STILL running).</p>
      </div>
      <div className='img-container'>

        <img className='about-me-img' src={tom} alt='Thomas Kelemen'></img>
      </div>
    </div>
  </div>
}