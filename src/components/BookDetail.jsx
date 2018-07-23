import React from 'react';
import PropTypes from 'prop-types';

function BookDetail(props){
  console.log('yodel', props.title);
  return(
    <div>
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  );
}

BookDetail.propTypes = {
  selectedBook: PropTypes.object
};

export default BookDetail;
