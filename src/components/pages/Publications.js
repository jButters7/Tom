import React from 'react';
import '../Publication.css';
import PubCardItem from '../PubCardItem';
import Pubs from '../publications.json'

const Publications = () => {

  return (
    <div className='pub_cards'>
      <div className='pub_cards__container'>
        <div className='pub_cards__wrapper'>
          <ul className='pub_cards__items'>
            {Pubs.map(element => {
              return (
                <PubCardItem
                  image={element.image}
                  title={element.title}
                  published_date={element.published_date}
                  link={element.link}
                  image_alt={element.image_alt}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Publications;