import React from 'react';
import home1 from './../assets/images/home1.png';
import bookshelfIcon from './../assets/images/bookshelfIcon.png';
import bookOpen from './../assets/images/bookOpen.png';
import searchIcon from './../assets/images/search.png';
import { Link } from 'react-router-dom';
import LineUp from './LineUp';
import Search from './Search';

function Footer(){
  return (
    <div>
      <hr style={{borderTop:  '1px solid #F8C170'}}></hr>
      <div className='footer-container'>
        <Link to='/home' style={{textDecoration: "none"}}><div className='home flex'>
          <img src={home1} alt='home icon' />
          <p>Home</p>
        </div></Link>
      <Link to='/bookshelf' style={{textDecoration: "none"}}><div className='bookshelf flex'>
          <img src={bookshelfIcon} alt='bookshelf icon' />
          <p>Bookshelf</p>
        </div></Link>
        <Link to='/lineup' style={{textDecoration: "none"}}><div className='lineup flex'>
          <img src={bookOpen} alt='line up icon' />
          <p>Line Up</p>
        </div></Link>
        <Link to='./search' style={{textDecoration: "none"}}><div className='search flex'>
          <img src={searchIcon} alt='search icon' />
          <p>Search</p>
        </div></Link>
      </div>
      <style jsx>{`
          .footer-container{
            display: flex;
            max-width: 400px;
            justify-content: space-between;
            margin: 15px 30px;
          }
          p{
            color: #F8C170;
            text-decoration: none;
            font-size: 1.15rem;
          }
          .flex{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          `}
      </style>
    </div>
  );
}

export default Footer;
