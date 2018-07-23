import React from 'react';
import PropTypes from 'prop-types';

function BookDetail(props){
  console.log('yodel', props.title);
  return(
    <div>
      <div>
        <div>
          <img src={props.image}/>
        </div>
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <em>{props.author}</em>
        </div>
        <div>
          <p>{props.year}</p>
        </div>
        <div>
          <button type='text'>TESTING</button>
        </div>
        <div>
          <p>{props.blurb}</p>
        </div>
      </div>
    </div>
  );
}

BookDetail.propTypes = {
  selectedBook: PropTypes.object
};

export default BookDetail;
