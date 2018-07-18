import React from 'react';

function ReadingNowPreview (){
  return (
    <div>
      <div className='reading-now'>
        <h3>Reading Now:</h3>
        <p>reading now preview works</p>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .reading-now{
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default ReadingNowPreview;
