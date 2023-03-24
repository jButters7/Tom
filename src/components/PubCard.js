import React from 'react';

// created using https://rumkin.com/tools/mailto-encoder/ add * * around email
let ML = "u o@ski:t.nh*/f=dl>mre\"a<";
let MI = "HG1;DE>?FCG6A827<5EAECE:35409E@0<FB<5EAECE:35409E@0<H=GB";
let OT = "";
for (let j = 0; j < MI.length; j++) {
  OT += ML.charAt(MI.charCodeAt(j) - 48);
}


function PubCard(props) {
  const ImgUrl = `https://thomaskelemen.netlify.app/${props.image}`;
  const emailBody = `Dear%20Dr.%20Kelemen,%0d%0a%0d%0aI%20would%20like%20to%20request%20the%20PDF%20file%20for%20"${props.title}"%0d%0a%0d%0aThank%20you,`;
  return (
    <div className='pub_card'>

      <div className='pub_card_info_container'>
        <a className='pub_card_title' href={props.link} target="_blank" rel="noreferrer">
          <h5>{props.title}</h5>
        </a>
        <p className='pub_card_info'>{props.info}</p>
        {props.authors ? <p className='pub_card_small'>{props.published_date} With {props.authors} <br /> {props.journal}</p> : <p className='pub_card_authors'>{props.journal}</p>}
        <div className='pub_card_footer'>
          <a className='request_pdf_btn' href={"mailto:" + OT.split("*")[1] + "?subject=PDF%20Request" + "&body=" + emailBody} target="_blank">Request PDF</a>
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