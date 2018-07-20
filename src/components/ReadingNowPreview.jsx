import React from 'react';
import cleaning from './../assets/images/cleaning.jpg';

function ReadingNowPreview (){
  return (
    <div>
      <div className='reading-now'>
        <h3>Reading Now:</h3>
        <div className='reading-now-flex'>
          <div>
            <img src={cleaning} alt='reading now book' />
          </div>
          <div>
            <p>A Manual for Cleaning Women</p>
            <em>by Lucia Berlin</em>
            <p>August 2015</p>
          </div>
        </div>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .reading-now{
          font-family: 'Montserrat', sans-serif;
        }
        img{
          max-height: 200px;
        }
        .reading-now-flex{
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default ReadingNowPreview;
