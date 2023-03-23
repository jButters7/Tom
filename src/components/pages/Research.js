import React, { useState, useEffect } from 'react';
import '../Research.css';
import PubCard from '../PubCard';
import Pubs from '../publications.json';
import { useParams } from 'react-router-dom';

const Research = () => {
  const [publications, setPublications] = useState([]);
  const formatParamCat = param => param.split('+').join(' ');
  const [formatParam, setFormat] = useState(formatParamCat(useParams().category));
  const [selectCategory, setSelectCategory] = useState(formatParamCat(useParams().category));

  const removeAllMediaPubs = () => {
    let allNonMediaPubs = [];
    //Will get only pubs that don't have media tag
    for (let i = 0; i < Pubs.length; i++) {
      for (let j = 0; j < Pubs[i].categories.length; j++) {
        if ((Pubs[i].categories[j]) !== "Media") {
          allNonMediaPubs.push(Pubs[i])
        }
      }
    }
    return setPublications(allNonMediaPubs);
  }

  const getAllCategories = () => {
    let allCat = [];
    for (let i = 0; i < Pubs.length; i++) {
      for (let j = 0; j < Pubs[i].categories.length; j++) {
        if (allCat.indexOf(Pubs[i].categories[j]) === -1) {
          allCat.push(Pubs[i].categories[j])
        }
      }
    }
    // removes "Media" from dropdown list
    if (allCat.indexOf("Media") > -1) {
      allCat.splice(allCat.indexOf("Media"), 1)
    }

    return allCat;
  }

  const [allCategories, setAllCategories] = useState(getAllCategories());

  const setPubList = () => {
    setPublications(() => {
      let pubsForSelectedCat = [];
      if (selectCategory === "All") {
        return Pubs;
      }
      for (let i = 0; i < Pubs.length; i++) {
        for (let j = 0; j < Pubs[i].categories.length; j++) {
          if (Pubs[i].categories.indexOf(selectCategory) !== -1) {
            pubsForSelectedCat.push(Pubs[i]);
            break
          }
        }
      }
      return pubsForSelectedCat;
    })
  }


  useEffect(() => {
    removeAllMediaPubs();
    setPubList();
  }, [selectCategory])

  return (
    <div className='pub2_container'>
      <h1 className='title'>My Research</h1>
      <div className='category_selector_container'>
        <h3>Sort By Category:</h3>

        <form>
          <select defaultValue={formatParam} className='select_cat_dropdown' onChange={e => setSelectCategory(e.target.value)}>
            <option value="All" key="All">All</option>
            {allCategories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
          </select>
        </form>

      </div>
      {publications.map((element, i) => {
        return (
          <PubCard
            title={element.title}
            published_date={element.published_date}
            link={element.link}
            image={element.image}
            image_alt={element.image_alt}
            image_credit={element.image_credit}
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

export default Research;