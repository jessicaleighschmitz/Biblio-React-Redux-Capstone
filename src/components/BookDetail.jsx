import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function BookDetail(props){

  function handleModalClose(){
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL',
    };
    dispatch(action);
  }

  return(
    <div>
      <div className='details'>
        <div onClick={handleModalClose}>
          <button type='text'>yolo</button>
        </div>
        <div>
          <p>{props.year}</p>
        </div>
        <div>
          <p>{props.blurb}</p>
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
