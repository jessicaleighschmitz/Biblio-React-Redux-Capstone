import React from 'react';
import Footer from './Footer';
import headerMain from '././../assets/images/headerMain.png';
import blackSearchIcon from './../assets/images/blackSearchIcon.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookShelfItem from './BookShelfItem';

function Search(props) {
  return (
    <div className='container'>
      <div>
        <div className='header'>
          <h1>Search</h1>
        </div>
        <div className='search-form'>
          <img src={blackSearchIcon} />
          <input type='text' placeholder='Title, Author, ISBN' />
        </div>
        <div className='search-grid'>
          {Object.keys(props.selectedBook.bookList).map(function(bookId){
            console.log(bookId);
            let book = props.selectedBook.bookList[bookId];
            return <BookShelfItem
              title={book.title}
              image={book.image}
              author={book.author}
              year={book.year}
              blurb={book.blurb}
              key={bookId}
              id={bookId}
            />;
          })}
        </div>
        <Footer />
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .container{
          max-width: 600px;
          margin: auto;
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
          margin: 0;
          text-shadow: 2px 4px 3px rgba(0,0,0,0.18);
        }
        img{
          max-height: 200px;
        }
        input{
          height: 33px;
          width: 270px;
          border-radius: 6px;
          border: none;
          background-color: rgba(248, 193, 112, .8);
        }
        .search-form{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 50px 0;
        }
        .search-grid{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          grid-gap: 10px;
          grid-auto-flow: dense;
        }
      `}</style>
    </div>
  );
}

Search.propTypes = {
  selectedBook: PropTypes.object,
};


const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(Search);
