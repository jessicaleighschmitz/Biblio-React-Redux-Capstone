import React from 'react';
import cleaning from './../assets/images/cleaning.jpg';

function ReadingNowPreview (){
  return (
    <div>
      <div className='reading-now'>
        <h3 className='reading-now-h3'>Reading Now</h3>
        <div className='reading-now-flex'>
          <div>
            <img src={cleaning} className='reading-now-img' alt='reading now book' />
          </div>
          <div className='reading-now-text'>
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
          box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }
        img:hover{
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        .reading-now-img{
          max-height: 150px;
          margin-left: 20px;
        }
        .reading-now-flex{
          display: flex;
        }
        .reading-now-text{
          padding: 15px;
        }
        .reading-now-h3{
          padding-left: 20px;
        }

      `}</style>
    </div>
  );
}

export default ReadingNowPreview;
