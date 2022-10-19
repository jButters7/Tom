import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Publications from './publications.json';
import PubCardItem2 from '../components/PubCardItem2';

const Cards = () => {
  const [pubs, setPubs] = useState([]);

  const getFivePubs = () => {
    let fivePubs = [];

    for (let i = 0; i < 5; i++) {
      fivePubs.push(Publications[i])
    }
    console.log(fivePubs)
    return setPubs(fivePubs);
  }


  useEffect(() => {
    getFivePubs();
  }, [])

  return (
    <div className='cards'>
      <h1>View My Recent Publications</h1>

      {pubs.map((e, i) => {
        return (
          <PubCardItem2
            image={pubs[i].image}
            title={pubs[i].title}
            published_date={pubs[i].published_date}
            link={pubs[i].link}
            image_alt={pubs[i].image_alt}
            info={pubs[i].info}
            authors={pubs[i].authors}
            key={i}
          />
        )
      })}

      {/* <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {pubs.map((e, i) => {
              console.log(pubs)
              return (
                <CardItem
                  image={pubs[i].image}
                  title={pubs[i].title}
                  published_date={pubs[i].published_date}
                  link={pubs[i].link}
                  image_alt={pubs[i].image_alt}
                  key={i}
                />
              )
            })}
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Cards;