import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import linked from './image/linked.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openResearch, setOpenResearch] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleOpenResearch = () => setOpenResearch(!openResearch);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    console.log(openResearch)
  }, [])

  window.addEventListener('resize', showButton);


  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'></div>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Thomas Kelemen
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <div>&equiv;</div> : <div>&equiv;</div>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onMouseEnter={handleOpenResearch} onMouseLeave={handleOpenResearch}>
            <Link to='/research/All' className='nav-links research' onClick={closeMobileMenu}>
              Research
            </Link>
            {openResearch ? <div className='dropdown_list_container'>
              <div className='dropdown_list'>
                <Link to='/research/Leadership' onClick={closeMobileMenu}>
                  Leadership
                </Link>
              </div>
              <div className='dropdown_list'>
                <Link to='/research/OCB' onClick={closeMobileMenu}>
                  OCB
                </Link>
              </div>
            </div> : <p></p>}
          </li>
          <li className='nav-item'>
            <Link to='/research/Media' className='nav-links' onClick={closeMobileMenu}>
              Media
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/publications2' className='nav-links' onClick={closeMobileMenu}>
              Teaching
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/cv' className='nav-links' onClick={closeMobileMenu}>
              C.V.
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
              About Me
            </Link>
          </li>
          <li className='nav-item'>
            <a href='https://www.linkedin.com/in/thomas-kelemen-64576059/' target="_blank">
              <img
                className='socials'
                alt='LinkedIn'
                src={linked}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
