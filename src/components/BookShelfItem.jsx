import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookDetail from './BookDetail';


function BookShelfItem(props){
  let optionalSelectedBook = null;
  if(props.id === props.selectedBook.selectedBook){
    console.log('werking', props.id);
    console.log('heyp', props.selectedBook.selectedBook);
    optionalSelectedBook = <BookDetail
       title={props.title}
       image={props.image}
       author={props.author}
       blurb={props.blurb}/>;
  }

//function does not yet work
  function hide(){
    let test = document.getElementsByClassName('all-books_null');
    if(test.style.display === 'block'){
        test.style.display = 'none';
    } else {
      test.style.display = 'block';
    }
  }

function handleSavingSelectedBook(bookId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_BOOK',
      newSelectedBookId: bookId
    };
    dispatch(action);
    alert(store.getState());
    console.log('yo', store.getState());
  }

  return(
    <div>
      <div className='each-book' onClick={() => handleSavingSelectedBook(props.id)}>
        {optionalSelectedBook}
        <div className='all-books_null' onClick={() => hide()}>
          <div>
            <img src={props.image} />
          </div>
          <div>
            <p className='title'>{props.title}</p>
            <em>by {props.author}</em>
          </div>
        </div>
      </div>

      <style jsx>{`
          .each-book{
            padding: 20px;
          }
          .title{
            font-weight: bold;
          }
      `}</style>
    </div>
  );
}

BookShelfItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
  read: PropTypes.bool,
  readingNow: PropTypes.bool,
  blurb: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
  selectedBook: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    bookList: state.bookList
  };
};

export default connect(mapStateToProps)(BookShelfItem);
