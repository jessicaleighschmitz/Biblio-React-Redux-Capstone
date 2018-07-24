import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AddBook(props){
  return (
    <div>
      <div>
        <p>fhajhg</p>
        <img src={props.year}/>
      </div>
    </div>
  );
}

AddBook.propTypes = {
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

export default connect(mapStateToProps)(AddBook);
