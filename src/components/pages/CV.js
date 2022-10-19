import React from 'react';
import '../../components/CV.css';
import cv from "../documents/Thomas-Kelemen-CV.docx"
import books from "../image/books.jpg"

const CV = () => {

  return <div className='cv_container'>

    <p>Please click <u><a href={cv} download='THomas-Kelemen-CV'>here</a></u> to download my CV</p>

    <img className='cv_books' src={books} />

  </div>
}

export default CV;