import React, { useState, useEffect } from 'react';
import Pubs from './documents/publications.json';
import PubCard from './PubCard';
import './css/RecentPub.css';

const RecentPub = () => {
  const [fivePubs, setFivePubs] = useState([]);
  const getFivePubs = () => {
    let fivePubs = [];
    let count = 0;

    // Will get first 5 Pubs that don't have media tag
    for (let i = 0; i < Pubs.length; i++) {
      if (Pubs[i].categories.indexOf("Media") == -1) {
        fivePubs.push(Pubs[i]);
        count++;
        if (count === 5) {
          break;
        }
      }
    }
    return setFivePubs(fivePubs);
  }

  useEffect(() => {
    getFivePubs();
  }, [])

  return (
    <div className='cards'>
      <h1>Recent Publications</h1>

      {fivePubs.map((e, i) => {
        return (
          <PubCard
            image={fivePubs[i].image}
            title={fivePubs[i].title}
            published_date={fivePubs[i].published_date}
            link={fivePubs[i].link}
            image_alt={fivePubs[i].image_alt}
            info={fivePubs[i].info}
            authors={fivePubs[i].authors}
            journal={fivePubs[i].journal}
            key={i}
          />
        )
      })}
    </div>
  );
}

export default RecentPub;