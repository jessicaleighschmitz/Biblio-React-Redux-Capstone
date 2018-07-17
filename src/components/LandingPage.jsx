import React from 'react';
import Footer from './Footer';
import landingPhoto from './../assets/images/landing-header-image.svg';

function LandingPage() {
  return (
    <div>
      <div>
        <div className='main-header'>
          <h1>Biblio</h1>
          <img src={landingPhoto}/>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .main-header{
          height: 100%;
          width: 100%;
          min-height: 800px;
          max-width: 600px;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
            `}
      </style>
    </div>
  );
}

export default LandingPage;
