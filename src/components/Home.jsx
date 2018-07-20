import React from 'react';
import Footer from './Footer';
import ReadingNowPreview from './ReadingNowPreview';
import headerMain from '././../assets/images/headerMain.png';
import { connect } from 'react-redux';
import BookShelfItem from './BookShelfItem';
import PropTypes from 'prop-types';

function Home(props) {
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
          {Object.keys(props.selectedBook.bookList).map(function(bookId){
            let book = props.selectedBook.bookList[bookId];
            return <BookShelfItem
              title={book.title}
              image={book.image}
              author={book.author}
              key={bookId}
              id={bookId}
            />;
          })}
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
  selectedBook: PropTypes.object,
};


const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps)(Home);
