import React from 'react';
import Footer from './Footer';
import ReadingNowPreview from './ReadingNowPreview';
import headerMain from '././../assets/images/headerMain.png';


function Home(){
  return(
    <div>
      <div>
        <div className='header'>
          <h1>Biblio</h1>
        </div>
        <div className='reading-now-preview'>
          <ReadingNowPreview />
        </div>
        <div className='recommended'>
          <h3>Recommended</h3>
          <p>book list that doesnt include the read or to read books</p>
        </div>
        <Footer />
      </div>
      <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat');
          .header{
            background-image: url(${headerMain});
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: cover;
            height: 100%;
            width: 100%;
            min-height: 300px;
            max-width: 600px;
          }
          h1{
            color: #fff;
            font-family: 'Lobster', cursive;
            font-size: 3rem;
            text-align: center;
            padding-top: 40px;
          }
          .reading-now-preview{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 160px;
            left: 30px;
            margin-top: 0;
          }
          .reading-now-preview, .recommended{
            font-family: 'Montserrat', sans-serif;
          }
          .recommended{
            margin-left: 20px;
          }
            `}</style>
    </div>
  );
}

export default Home;
