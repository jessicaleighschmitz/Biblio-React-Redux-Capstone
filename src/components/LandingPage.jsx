import React from 'react';

import landingPhoto from './../assets/images/landing-header-image.svg';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <div className='container'>
        <div className='main-header'>
          <h1 className="main-title">Biblio</h1>
          <p>Your Next Adventure</p>
        </div>
        <div className='login'>
          <input className='username' type='text' placeholder='username' />
          <input className='password' type='password' placeholder='password' />
          <Link to='/home'><button>Go!</button></Link>
        </div>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
        .container{
          max-width: 600px;
          margin: auto;
        }
        .main-header{
          background-image: url(${landingPhoto});
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
          min-height: 100px;
          width: 100%;
          min-height: 800px;

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
          text-shadow: 2px 4px 3px rgba(0,0,0,0.18);
        }
        .main-header p{
          font-size: 1.6rem;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
        }
        .username, .password{
          border-radius: 6px;
          border: solid 1px #F8C170;
          width: 223px;
          height: 33px;
          margin-top: 23px;
          font-size: 1.1rem;
          padding-left: 23px;
          color: #4a4a4a;
        }
        .password{
          color: #F8C170;
        }
        input::placeholder{
          color: #F8C170;
          font-size: 18px;
        }
        button{
          background-color: #F8C170;;
          border-radius: 6px;
          width: 123px;
          height: 33px;
          margin-top: 23px;
        }
        .login{
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
        }
        button{
          color: #fff;
          font-weight: bold;
          font-size: 18px;
        }

            `}
      </style>
    </div>
  );
}

export default LandingPage;
