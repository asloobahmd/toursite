import React from 'react';
import '../styles/Home.css';

import homeBanner from '../assets/homeBanner.jpg'

// import { Button } from 'react-bootstrap'


function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>
          <h4>DISCOVER THE COLORFUL WORLD</h4>

          <h1>NEW ADVENTURE</h1>

          <p> Hello, Welcome to Jet and Set. Go and book your next
            fav destination that you love.
            Checkout our pages and exclusive content. 
            book your trip today with us. Crazy Adventures
          </p>

          <button>DISCOVER NOW</button>

      </div>
    </div>
  )
}

export default Home