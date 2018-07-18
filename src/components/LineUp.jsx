import React from 'react';
import Footer from './Footer';
import headerMain from '././../assets/images/headerMain.png';

function LineUp() {
  return (
    <div>
      <div>
        <div className='header'>
          <h1>Line Up</h1>
        </div>
        <div className='lineup-list'>
          <p>list lineup will go here</p>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
        div{
          font-family: 'Montserrat', sans-serif;
        }
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

export default LineUp;
