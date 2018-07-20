import React from 'react';
import PropTypes from 'prop-types';

function BookShelfItem(props){
  const bookInfo =
    <div className='each-book'>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <p className='title'>{props.title}</p>
        <em>by {props.author}</em>
      </div>
    </div>;
  return(
    <div>
      <div className='list'>
        {bookInfo}
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
  year: PropTypes.number,
  image: PropTypes.string,
  read: PropTypes.bool,
  readingNow: PropTypes.bool,
  blurb: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string
};

export default BookShelfItem;
