import React from 'react';
import home1 from './../assets/images/home1.png';
import bookshelfIcon from './../assets/images/bookshelfIcon.png';
import bookOpen from './../assets/images/bookOpen.png';
import searchIcon from './../assets/images/search.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Footer(props){

  function handleModalClose(){
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_MODAL_OFF',
    };
    dispatch(action);
  }
  return (
    <div>
      <hr style={{borderTop:'1px solid #F8C170'}}></hr>
      <div className='footer-container'>
        <Link to='/home' style={{textDecoration: 'none'}}>
          <div onClick={handleModalClose} className='home flex'>
            <img className='footer-img' src={home1} alt='home icon' />
            <p className='footer-p'>Home</p>
          </div>
        </Link>
        <Link to='/bookshelf' style={{textDecoration: 'none'}}>
          <div onClick={handleModalClose} className='bookshelf flex'>
            <img className='footer-img' src={bookshelfIcon} alt='bookshelf icon' />
            <p className='footer-p'>Bookshelf</p>
          </div>
        </Link>
        <Link to='/lineup' style={{textDecoration: 'none'}}>
          <div onClick={handleModalClose} className='lineup flex'>
            <img className='footer-img' src={bookOpen} alt='line up icon' />
            <p className='footer-p'>Line Up</p>
          </div>
        </Link>
        <Link to='/search' style={{textDecoration: 'none'}}>
          <div onClick={handleModalClose} className='search flex'>
            <img className='footer-img' src={searchIcon} alt='search icon' />
            <p className='footer-p'>Search</p>
          </div>
        </Link>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
          .footer-container{
            display: flex;
            justify-content: space-between;
            margin: 15px 30px;
            position: relative;
          }
          .footer-p{
            color: #F8C170;
            text-decoration: none;
            font-family: 'Montserrat', sans-serif;
          }
          .flex{
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-img{
            box-shadow: none;
          }
          .footer-img:hover{
            box-shadow: none;
          }
          `}
      </style>
    </div>
  );
}

Footer.propTypes = {
  selectedBook: PropTypes.string,
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

export default connect(mapStateToProps)(Footer);
