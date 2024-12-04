import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import images
import nature1 from '../../src/assets/images/pexels-pixabay-207924.jpg';
import nature2 from '../../src/assets/images/game-3.jpeg';
import nature3 from '../../src/assets/images/free-fire-banner.jpg';

export default function Slider() {
  const swiperRef = React.useRef(null);

  const handleSlide3Click = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Navigate to Slide 1 (index 0)
    }
  };

  return (
    <>
      <style>
        {`
          .swiper {
            width: 100%;
            height: 400px;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .swiper-slide {
            font-size: 18px;
            color: #fff;
            box-sizing: border-box;
            padding: 40px 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .parallax-bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 130%;
            height: 100%;
            background-size: cover;
            background-position: center;
            filter: brightness(90%); /* Reduces brightness */
            z-index: -1; /* Keep the background image behind the text */
          }
          .swiper-slide .title {
            font-size: 41px;
            font-weight: bold;
            margin-bottom: 10px;
            z-index: 1;
          }
          .swiper-slide .subtitle {
            font-size: 21px;
            font-weight: bold;
            margin-bottom: 15px;
            z-index: 1;
          }
          .swiper-slide .text {
            font-size: 14px;
            max-width: 400px;
            line-height: 1.5;
            z-index: 1;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Overlay color with transparency */
            z-index: 0;
          }
        `}
      </style>

      <Swiper
        ref={swiperRef}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 3000, // Auto-slide every 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="swiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${nature1})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <div className="overlay"></div> {/* Dark overlay */}
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Chill Gamer
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Your Go-To Game Review Platform
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Explore and share game reviews effortlessly. Chill Gamer is designed to provide a relaxing and immersive experience for gamers to discover their next favorite game.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${nature2})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="overlay"></div> {/* Dark overlay */}
          <div className="title" data-swiper-parallax="-300">
            Key Features
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            User Authentication & Review Management
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Secure user accounts, intuitive review posting, and seamless browsing. Designed with simplicity and functionality, making the experience truly "chill."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlide3Click}>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${nature3})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <div className="overlay"></div> {/* Dark overlay */}
          <div className="title" data-swiper-parallax="-300">
            Clean & Responsive UI
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Built for Gamers, by Gamers
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Enjoy a clean, responsive interface that works perfectly across devices. Start your "chill" journey with us today.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
