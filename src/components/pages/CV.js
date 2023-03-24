import React from 'react';
import '../../components/CV.css';
import cv from "../documents/Thomas-Kelemen-CV.docx"
import openBooks from "../image/open_books.jpg";

const CV = () => {
  return (
    <div className='cv_container'>
      <img className='cv_image' src={openBooks} />
      <div className='cv_info'>
        <p><center>Dr. Thomas Kelemen's Curriculum Vitae</center></p>
        <a className='cv_download_btn' href={cv} download='THomas-Kelemen-CV'>Download a copy of my C.V.</a>
      </div>
    </div>)
}

export default CV;