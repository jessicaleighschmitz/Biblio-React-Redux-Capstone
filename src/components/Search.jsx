import React from 'react';
import Footer from './Footer';
import headerMain from '././../assets/images/headerMain.png';
import blackSearchIcon from './../assets/images/blackSearchIcon.png';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import BookShelfItem from './BookShelfItem';

function Search(props) {
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
        <div className='search-list'>
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

// Search.propTypes = {
//   title: PropTypes.string,
//   author: PropTypes.string,
//   year: PropTypes.number,
//   image: PropTypes.string,
//   read: PropTypes.bool,
//   readingNow: PropTypes.bool,
//   blurb: PropTypes.string,
//   key: PropTypes.string,
//   id: PropTypes.string,
// };


const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps)(Search);
