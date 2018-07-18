import React from 'react';
import Footer from './Footer';
import ReadingNowPreview from './ReadingNowPreview';
import headerMain from '././../assets/images/headerMain.png';

function BookShelf() {
  return (
    <div>
      <div>
        <div className='header'>
          <h1>Book Shelf</h1>
        </div>
        <div className='reading-now-preview'>
          <ReadingNowPreview />
        </div>
        <div className='book-list'>
          <h3>Your Completed Shelf</h3>
          <p>book list here</p>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
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
        .reading-now-preview{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 160px;
          left: 30px;
          margin-top: 0;
        }
        .book-list{
          font-family: 'Montserrat', sans-serif;
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
}

export default BookShelf;
