import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookDetail from './BookDetail';
import Modal from 'react-modal';


function BookShelfItem(props){

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '450px'
    }
  };

  let optionalSelectedBook = null;

  if(props.selectedBook === props.id){
    optionalSelectedBook =
      <Modal
        style={customStyles}
        isOpen={props.modalToggle}>
        <BookDetail
          title={props.title}
          image={props.image}
          author={props.author}
          blurb={props.blurb}
          year={props.year}
          id={props.id}
        />
      </Modal>;
  }


  function handleSavingSelectedBook(){
    const { dispatch } = props;
    const action1 = {
      type: 'SELECT_BOOK',
      newSelectedBookId: props.id
    };
    dispatch(action1);
    const action2 = {
      type: 'TOGGLE_MODAL_ON',
    };
    dispatch(action2);
  }


  return(
    <div className='container'>
      <div className='each-book' onClick={handleSavingSelectedBook}>
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
          @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat:400,600');
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
            max-width: 135px;
            margin: 16px 0 8px;
          }
          p, em{
            color: #4A4A4A;
          }
          em{
            font-size: .85rem;
          }
          .container{
            margin: auto;
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
  modalToggle: PropTypes.bool,
  bookList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    bookList: state.bookList,
    modalToggle: state.modalToggle
  };
};

export default connect(mapStateToProps)(BookShelfItem);
