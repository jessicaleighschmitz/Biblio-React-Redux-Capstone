import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookDetail from './BookDetail';
import ReactModal from 'react-modal';


function BookShelfItem(props){

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  let optionalSelectedBook = null;
  // let modalIsOpen = false;

  if(props.selectedBook === props.id){
    optionalSelectedBook =
      <BookDetail
        title={props.title}
        image={props.image}
        author={props.author}
        blurb={props.blurb}
        year={props.year}
        />
    }

// <ReactModal
//   if(props.selectedBook === 'null'){
//     isOpen={false}
//   }


  //function does not yet work
  // function hide(){
  //   let test = document.getElementsByClassName('all-books');
  //   if(test.style.display === 'block'){
  //     console.log('hello');
  //     test.style.display = 'none';
  //   } else {
  //     test.style.display = 'block';
  //   }
  // }
  // onClick={() => hide()}

  function handleSavingSelectedBook(){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_BOOK',
      newSelectedBookId: props.id
    };
    dispatch(action);
  }

  return(
    <div>
      <div className='each-book' onClick={() => handleSavingSelectedBook()}>
        <div className='all-books'>
          <div>
            <img className='img' src={props.image} />
          </div>
          <div>
            <p className='title'>{props.title}</p>
            <em>by {props.author}</em>
          </div>
        </div>
        <div>{optionalSelectedBook}</div>
      </div>

      <style jsx>{`
          .each-book{
            padding: 20px;
          }
          .img{
            box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
          }
          .img:hover{
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
  selectedBook: PropTypes.string,
  modalIsOpen: PropTypes.bool,
  bookList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(BookShelfItem);
