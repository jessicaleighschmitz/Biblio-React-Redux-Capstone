import React from 'react';
import Footer from './Footer';
import headerMain from '././../assets/images/headerMain.png';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import BookShelfItem from './BookShelfItem';

function LineUp(props) {
  return (
    <div>
      <div>
        <div className='header'>
          <h1>Line Up</h1>
        </div>
        <div className='lineup-list'>
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

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps)(LineUp);
