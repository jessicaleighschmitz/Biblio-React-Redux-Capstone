import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import AddBook from './AddBook';

function BookDetail(props){

//reducer is not working
  function handleModalClose(){
    console.log('yo');
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL',
    };
    dispatch(action);
  }

  function handleBookBeingRead(){
    console.log('heya');
    const { dispatch } = props;
    const action1 = {
      type: 'READ_BOOK',
    };
    dispatch(action1);
  }

  return(
    <div>
      <div className='details'>
        <div onClick={handleModalClose}>
          <button type='text'>X</button>
        </div>
        <div>
          <img src={props.image} alt='cover image'/>
        </div>
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <p>by {props.author}</p>
        </div>
        <div>
          <p>{props.year}</p>
        </div>
        <div>
          <p>{props.blurb}</p>
        </div>

          <div>
            <button onClick={handleBookBeingRead} type='button'>Save Book</button>
          </div>

      </div>
      <style jsx>{`
          .details{
            min-width: 300px;
            font-size: .8rem;
          }
            `}</style>
    </div>
  );
}

BookDetail.propTypes = {
  selectedBook: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
  read: PropTypes.bool,
  readingNow: PropTypes.bool,
  blurb: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string,
  modalToggle: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    bookList: state.bookList,
    modalIsOpen: state.modalIsOpen
  };
};

export default connect(mapStateToProps)(BookDetail);
