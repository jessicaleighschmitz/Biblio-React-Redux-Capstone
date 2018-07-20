import React from 'react';
import PropTypes from 'prop-types';

function BookShelfItem(props){
  const bookInfo =
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <p>{props.title}</p>
        <em>by {props.author}</em>
      </div>
    </div>;
  return(
    <div>
      <div>
        {bookInfo}
      </div>
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
