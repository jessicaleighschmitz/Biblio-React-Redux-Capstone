import React from 'react';
import Footer from './Footer';
import headerMain from '././../assets/images/headerMain.png';
import { connect } from 'react-redux';
import BookShelfItem from './BookShelfItem';
import PropTypes from 'prop-types';

function LineUp(props) {
  return (
    <div className='container'>
      <div>
        <div className='header'>
          <h1>Line Up</h1>
        </div>
        <div className='lineup-grid'>
          {Object.keys(props.bookList).map(function(bookId){
            let book = props.bookList[bookId];
            if (book.lineup){
              return <BookShelfItem
                title={book.title}
                image={book.image}
                author={book.author}
                year={book.year}
                blurb={book.blurb}
                key={bookId}
                id={bookId}
              />;
            }
          })}
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
        .container{
          max-width: 600px;
          margin: auto;
        }
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
          text-shadow: 2px 4px 3px rgba(0,0,0,0.18);
        }
        img{
          max-height: 200px;
        }
        .lineup-grid{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          grid-gap: 10px;
          grid-auto-flow: dense;
        }
      `}</style>
    </div>
  );
}

LineUp.propTypes = {
  selectedBook: PropTypes.object,
  bookList: PropTypes.object,
  modalToggle: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    modalToggle: PropTypes.bool,
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(LineUp);
