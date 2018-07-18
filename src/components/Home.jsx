import React from 'react';
import Footer from './Footer';
import ReadingNowPreview from './ReadingNowPreview';


function Home(){
  return(
    <div>
      <div>
        <div className='header'>
          <h1>Biblio</h1>
        </div>
        <div className='reading-now-preview'>
          <h3>Reading Now</h3>
          <ReadingNowPreview />
        </div>
        <div className='recommended'>
          <h3>Recommended</h3>
          <p>book list that doesnt include the read or to read books</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
