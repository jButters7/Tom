import React, { useState, useEffect } from 'react';
import '../Research.css';
import PubCardItem2 from '../PubCardItem2';
import Pubs from '../publications.json';
import { useParams } from 'react-router-dom';

const Publications2 = () => {

  const [selectCategory, setSelectCategory] = useState(useParams().category);
  const [publications, setPublications] = useState([]);

  const getAllCategories = () => {
    let allCat = [];
    for (let i = 0; i < Pubs.length; i++) {
      for (let j = 0; j < Pubs[i].categories.length; j++) {
        if (allCat.indexOf(Pubs[i].categories[j]) === -1) {
          allCat.push(Pubs[i].categories[j])
        }
      }
    }
    return allCat;
  }

  const [allCategories, setAllCategories] = useState(getAllCategories());
  console.log(useParams().category, publications)

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
    setPubList();
  }, [selectCategory, useParams()])

  return (
    <div className='pub2_container'>
      <h1 className='title'>My Publications</h1>
      <div className='category_selector_container'>
        <h3>Sort By Category:</h3>

        <form>
          <select defaultValue={useParams().category} className='select_cat_dropdown' onChange={e => setSelectCategory(e.target.value)}>
            <option value="All" key="All">All</option>
            {allCategories.map(cat => <option value={cat} key={cat}>{cat}</option>)}
          </select>
        </form>

      </div>
      {publications.map((element, i) => {
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

export default Publications2;