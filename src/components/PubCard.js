import React from 'react';

function PubCard(props) {
  const ImgUrl = `https://celadon-rugelach-78a7d1.netlify.app/${props.image}`;
  return (
    <div className='pub2_card'>
      <div className='pub_card_info_container'>
        <a className='pub2_card_title' href={props.link} target="_blank" rel="noreferrer">
          <h5>{props.title}</h5>
        </a>
        <p className='pub_card_info'>{props.info}</p>
        {props.authors ? <p className='pub_card_authors'>{props.published_date} With {props.authors} <br /> {props.journal}</p> : <p className='pub_card_authors'>{props.journal}</p>}
        <div className='pub_card_footer'>
          <a className='request_pdf_btn'>Request PDF</a>
        </div>
      </div>
      <div className='pub_card_img_container'>
        <a className='pub_card_link' href={props.link} target="_blank" rel="noreferrer">
          <img className='pub_card_img' alt={props.image_alt} src={ImgUrl} />
        </a>
      </div>
    </div>
  );
}

export default PubCard;