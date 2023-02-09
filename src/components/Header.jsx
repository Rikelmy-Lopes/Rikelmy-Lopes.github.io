import React from 'react';
import '../style/Header.css';

import profileImage from '../assets/jpeg/profile-image.jpg';
import hamMenu from '../assets/svg/ham-menu.svg';
import hamMenuClose from '../assets/svg/ham-menu-close.svg';

function Header() {

  const handleHam = () => {
    const smallMenu = document.querySelector('.header__sm-menu');
    const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
    const headerHamMenuCloseBtn = document.querySelector(
      '.header__main-ham-menu-close'
    );
      
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active');
    } else {
      smallMenu.classList.add('header__sm-menu--active');
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none');
      headerHamMenuCloseBtn.classList.add('d-none');
    } else {
      headerHamMenuBtn.classList.add('d-none');
      headerHamMenuCloseBtn.classList.remove('d-none');
    }
  };

  // window.onload = () => {
  //   const smallMenu = document.querySelector('.header__sm-menu');
  //   const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
  //   const headerHamMenuCloseBtn = document.querySelector(
  //     '.header__main-ham-menu-close'
  //   );
  
  //   const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');
  
  //   for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  //     headerSmallMenuLinks[i].addEventListener('click', () => {
  //       smallMenu.classList.remove('header__sm-menu--active');
  //       headerHamMenuBtn.classList.remove('d-none');
  //       headerHamMenuCloseBtn.classList.add('d-none');
  //     });
  //   }
      
  //   // ---
  //   const headerLogoConatiner = document.querySelector('.header__logo-container');
      
  //   headerLogoConatiner.addEventListener('click', () => {
  //     // eslint-disable-next-line no-restricted-globals
  //     location.href = 'index.html';
  //   });
  // };


  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={profileImage}
              alt="Ram Maheshwari Logo"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Rikelmy Lopes</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a  href="#home" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">Sobre </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                  Projetos
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link"> Contato </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont"
            onClick={ handleHam }>
            <img
              src={hamMenu}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src={hamMenuClose}
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="#home"> Home </a>
            </li>
  
            <li className="header__sm-menu-link">
              <a href="#about"> Sobre </a>
            </li>
  
            <li className="header__sm-menu-link">
              <a href="#projects"> Projetos </a>
            </li>
  
            <li className="header__sm-menu-link">
              <a href="#contact"> Contato </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;