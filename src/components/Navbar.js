import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import linked from './image/linked.png';
import './css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openResearch, setOpenResearch] = useState(false);
  // const location = useLocation();
  const page = useLocation().pathname.split('/')[1]

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleOpenResearch = () => {
    // removes research dropdown options when research page is open.
    if (page !== 'research') {
      setOpenResearch(!openResearch);
    }
    if (openResearch === true) {
      setOpenResearch(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
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
                <Link to='/research/Job+Design' onClick={closeMobileMenu}>
                  Job Design
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
            <Link to='/media' className='nav-links' onClick={closeMobileMenu}>
              Media
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
