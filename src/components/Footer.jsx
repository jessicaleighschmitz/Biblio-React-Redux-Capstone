import React from 'react';
import home1 from './../assets/images/home1.png';
import bookshelfIcon from './../assets/images/bookshelfIcon.png'
import bookOpen from './../assets/images/bookOpen.png';
import search from './../assets/images/search.png';

function Footer(){
  return (
    <div>
      <hr></hr>
      <div className='footer-container'>
        <div className='home'>
          <img src={home1} alt='home icon' />
          <p>Home</p>
        </div>
        <div className='bookshelf'>
          <img src={bookshelfIcon} alt='bookshelf icon' />
          <p>Bookshelf</p>
        </div>
        <div className='lineup'>
          <img src={bookOpen} alt='line up icon' />
          <p>Line Up</p>
        </div>
        <div className='search'>
          <img src={search} alt='search icon' />
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
