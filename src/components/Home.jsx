import React from 'react';
import Footer from './Footer';
import ReadingNowPreview from './ReadingNowPreview';
import headerMain from '././../assets/images/headerMain.png';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import BookShelfItem from './BookShelfItem';

function Home(props) {
  const bookInfo =
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <p>{props.title}</p>
        <em>by {props.author}</em>
      </div>
    </div>;
  return(
    <div>
      <div>
        <div className='header'>
          <h1>Biblio</h1>
        </div>
        <div className='reading-now-preview'>
          <ReadingNowPreview />
        </div>
        <div className='recommended'>
          <h3>Recommended</h3>
            <div className='list'>
              {bookInfo}
            </div>
        </div>
        <Footer />
      </div>
      <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
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
            font-family: 'Lobster', cursive;
            font-size: 3rem;
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
          .reading-now-preview, .recommended{
            font-family: 'Montserrat', sans-serif;
          }
          .recommended{
            margin-left: 20px;
            margin-top: 200px;

          }
            `}</style>
    </div>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.number,
  image: PropTypes.string,
  read: PropTypes.bool,
  readingNow: PropTypes.bool,
  blurb: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
};



export default Home;
