import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.link} target="_blank" rel="noreferrer">
          <figure className='cards__item__pic-wrap' data-category={props.published_date}>
            <img
              className='cards__item__img'
              alt={props.image_alt}
              src={props.image}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;