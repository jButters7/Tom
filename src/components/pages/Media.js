import React, { useState, useEffect } from 'react';
import PubCardItem2 from '../PubCard';
import Pubs from '../documents/publications.json';
import '../css/Research.css';

const Media = () => {
  const [mediaPub, setMediaPub] = useState([]);

  const getAllMediaPubs = () => {
    let allMediaPub = [];
    //Will get only pubs that have media tag
    for (let i = 0; i < Pubs.length; i++) {
      for (let j = 0; j < Pubs[i].categories.length; j++) {
        if ((Pubs[i].categories[j]) === "Media") {
          allMediaPub.push(Pubs[i])
        }
      }
    }
    return setMediaPub(allMediaPub);
  }

  useEffect(() => {
    getAllMediaPubs();
  }, [])

  return (
    <div className='pub2_container'>
      <h1 className='title'>My Media</h1>
      {mediaPub.map((element, i) => {
        return (
          <PubCardItem2
            image={element.image}
            title={element.title}
            published_date={element.published_date}
            link={element.link}
            image_alt={element.image_alt}
            info={element.info}
            authors={element.authors}
            journal={element.journal}
            key={i}
          />
        )
      })}
    </div>
  );
}

export default Media;