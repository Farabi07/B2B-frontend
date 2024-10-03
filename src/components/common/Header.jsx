import React from 'react';
import Slider from "react-slick"; // Import Slider
import styles from './Header.module.css'; // Import CSS module

// Import the slick CSS styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles['header-container']}>
      {/* Navbar Section */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/ProductPage">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Slider Section */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className={styles['banner']} style={{ backgroundImage: `url('/assets/images/laptopShop1.jpg')` }}>
          <h1 className="text-primary text-uppercase font-weight-bold text-center my-4">
            Welcome to Our B2B Platform
          </h1>
        </div>

        {/* Slide 2 */}
        <div className={styles['banner']} style={{ backgroundImage: `url('/assets/images/laptopShop2.jpg')` }}>
          <h1 className="text-primary text-uppercase font-weight-bold text-center my-4">
            Explore Our Latest Products
          </h1>
        </div>

        {/* Slide 3 */}
        <div className={styles['banner']} style={{ backgroundImage: `url('/assets/images/public.avif')` }}>
          <h1 className="text-primary text-uppercase font-weight-bold text-center my-4">
            Great Deals for You!
          </h1>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
