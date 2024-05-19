import React, { useState, useEffect } from "react";
import './Header.css'


const images = [
    '/header_img3.png',
    '/header_img..png',
    '/header_img2.png',

  ];

const Header =() => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
}, []);
    
    return (
        <div className="header">
             <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
         <div className="header-contents">
            <h2>Order your favourite food here..</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem vel praesentium quo ratione velit illo natus est quibusdam unde architecto voluptatum, quisquam harum enim reprehenderit optio explicabo ex dolore soluta.</p>
            <button>View Menu</button>
         </div>
        </div>
    )
}

export default Header



