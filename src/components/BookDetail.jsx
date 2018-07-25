import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function BookDetail(props){

  function handleModalClose(){
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL_OFF',
    };
    dispatch(action);
  }

  function handleBookBeingRead(){
    const { dispatch } = props;
    const action1 = {
      type: 'READ_BOOK',
      id: props.id
    };
    dispatch(action1);
  }
  function handleBookBeingWanted(){
    const { dispatch } = props;
    const action2 = {
      type: 'WANT_TO_READ',
      id: props.id
    };
    dispatch(action2);
  }

  return(
    <div>
      <div className='details'>
        <div onClick={handleModalClose}>
          <button className='exit' type='text'>X</button>
        </div>
        <div className='image'>
          <img src={props.image} alt='cover image'/>
        </div>
        <div className='modal-title'>
          <p>{props.title}</p>
        </div>
        <div className='author'>
          <em>by {props.author}</em>
        </div>
        <div className='year'>
          <p>Published: {props.year}</p>
        </div>
        <div className='blurb'>
          <p>{props.blurb}</p>
        </div>
          <div className='modal-button'>
            <button className='button-bookshelf' onClick={handleBookBeingRead} type='button'>I've read this book</button>
            <button className='button-lineup' onClick={handleBookBeingWanted} type='button'>Save for later</button>
          </div>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat:400,600');
          .details{
            min-width: 300px;
            font-size: .8rem;
          }
          .image{
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #F8C170;
            padding: 30px;
          }
          .image img{
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          }
          .modal-title p{
            font-weight: 600;
            font-size: 2rem;
            margin: 20px 0;
            font-family: Montserrat;
          }
          .author em{
            font-size: 1.2rem;
            font-family: Montserrat;
          }
          .year{
            font-size: .8rem;
            font-family: Montserrat;
          }
          .blurb p{
            font-size: .8rem;
            margin: 40px 0;
          }
          p{
            font-family: Montserrat;
          }
          .button-bookshelf{
            border-radius: 6px;
            height: 30px;
            width: 200px;
            margin: 0 0 20px;
            cursor: pointer;
            color: #F8C170;
            font-size: 1rem;
            border:none;
            text-transform: uppercase;
          }
          .button-lineup{
            background-color: #F8C170;
            border-radius: 8px;
            height: 30px;
            width: 200px;
            color: #fff;
            font-size: 1rem;
            margin: 0 0 20px;
            cursor: pointer;
            transition:800ms ease background-color;
            outline:none;
            border: none;
            text-transform: uppercase;
          }
          .button-lineup:hover{
              background:#fff;
              color:#F8C170;
              border: 1.5px solid #F8C170;
          }
          .modal-button{
            display: flex;
            justify-content: space-around;
          }
          .exit{
            border: none;
            font-size: 1.5rem;
            color: #F8C170;
            display: inline-block;
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            -webkit-transition-property: transform;
            transition-property: transform;
          }
          .exit:hover, .exit:focus, .exit:active{
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
            font-weight: 600;
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
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBook,
    bookList: state.bookList,
    modalIsOpen: state.modalIsOpen
  };
};

export default connect(mapStateToProps)(BookDetail);
