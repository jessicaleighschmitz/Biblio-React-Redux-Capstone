import React from 'react';
import Footer from './Footer';
import landingPhoto from './../assets/images/landing-header-image.svg';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <div>
        <div className='main-header'>
          <h1 className="main-title">Biblio</h1>
          <p>Your Next Adventure</p>
        </div>
        <div className='login'>
          <input type='text' placeholder='username' />
          <input type='text' placeholder='password' />
          <Link to='/home'><button>Go!</button></Link>
        </div>

        <Footer />
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
        .main-header{
          background-image: url(${landingPhoto});
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
          height: 100%;
          width: 100%;
          min-height: 800px;
          max-width: 600px;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main-title{
          color: #fff;
          font-size: 7rem;
          font-family: 'Lobster', cursive;
          margin: 0;
        }
        .main-header p{
          font-size: 1.6rem;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
        }
            `}
      </style>
    </div>
  );
}

export default LandingPage;
