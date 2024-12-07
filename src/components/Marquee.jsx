import React from "react";
import Marquee from "react-fast-marquee";

// Import your images
import img1 from '../../src/assets/icons/a1.jpg';
import img2 from '../../src/assets/icons/a2.jpg';
import img3 from '../../src/assets/icons/a3.jpeg';
import img4 from '../../src/assets/icons/a4.jpg';
import img5 from '../../src/assets/icons/a5.jpg';
import img6 from '../../src/assets/icons/a6.jpeg';
import img7 from '../../src/assets/icons/a6.jpg';
import img8 from '../../src/assets/icons/hq720.jpg';

const MarqueeComponent = () => {
  // Array of images for dynamic rendering
  const images = [img1, img2, img3, img4, img5, img6, img7,img8];

  return (
    <div className="my-8">
        <div className="text-center mb-6 text-gray-600">
        <h1 className="text-3xl font-bold">Latest Games</h1>
        <p className="text-lg text-gray-600 mt-2">Check out our trending games in the spotlight!</p>
      </div>
      <hr className="mb-6"/>
      <Marquee pauseOnHover={true} speed={50}>
        {images.map((image, index) => (
          <div key={index} className="mx-4">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
