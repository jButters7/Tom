import React from 'react';

// created using https://rumkin.com/tools/mailto-encoder/ add * * around email
let ML = "u o@ski:t.nh*/f=dl>mre\"a<";
let MI = "HG1;DE>?FCG6A827<5EAECE:35409E@0<FB<5EAECE:35409E@0<H=GB";
let OT = "";
for (let j = 0; j < MI.length; j++) {
  OT += ML.charAt(MI.charCodeAt(j) - 48);
}


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
          <a className='request_pdf_btn' href={"mailto:" + OT.split("*")[1] + "?subject=PDF%20Request" + "&body=" + props.title} target="_blank">Request PDF</a>
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