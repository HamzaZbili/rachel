import React from 'react'
import Carousel from './components/Carousel';

const MyWork = () => {
  return (
    <div
      id="myWork"
      className="flex justify-between flex-col sm:flex-row"
    >
      <Carousel/>
    </div>
  );
}

export default MyWork