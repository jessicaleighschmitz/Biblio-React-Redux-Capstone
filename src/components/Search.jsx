import React from 'react';
import Footer from './Footer';
import headerMain from '././../assets/images/headerMain.png';
import blackSearchIcon from './../assets/images/blackSearchIcon.png';

function Search() {
  return (
    <div>
      <div>
        <div className='header'>
          <h1>Search</h1>
        </div>
        <div className='search-form'>
          <img src={blackSearchIcon} />
          <input type='text' placeholder='Title, Author, ISBN' />
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .header{
          background-image: url(${headerMain});
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
          height: 100%;
          width: 100%;
          min-height: 300px;
          max-width: 600px;
        }
        h1{
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 2.6rem;
          text-align: center;
          padding-top: 40px;
        }
      `}</style>
    </div>
  );
}

export default Search;
