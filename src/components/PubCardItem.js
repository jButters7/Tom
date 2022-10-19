import React from 'react';

function PubCardItem(props) {
  return (
    <div className='pub_cards'>
      <li className='pub_cards__item'>
        <a className='pub_cards__item__link' href={props.link} target="_blank" rel="noreferrer">
          <figure className='pub_cards__item__pic-wrap' data-category={props.published_date}>
            <img
              className='pub_cards__item__img'
              alt={props.image_alt}
              src={props.image}
            />
          </figure>
          <div className='pub_cards__item__info'>
            <h5 className='pub_cards__item__text'>{props.title}</h5>
          </div>
        </a>
      </li>
    </div>
  );
}

export default PubCardItem;