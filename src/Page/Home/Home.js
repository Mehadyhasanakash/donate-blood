import React from 'react';



const Home = () => {
    return (
        <div>
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/8x8QXjM/banner01.jpg" class="w-full" alt='' />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/6nVg3Cf/banner03.jpg" class="w-full" alt='' />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
   
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/Q9HvW6J/banner02.jpg" class="w-full" alt='' />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;