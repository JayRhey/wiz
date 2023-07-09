import React, { useEffect } from 'react';
import './Carousel.css';
import M from 'materialize-css';
import products from '../../data/data';
import SubMenu from '../SubMenu/SubMenu';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Carousel = ({ productId }) => {
useEffect(() => {
    M.AutoInit();
  }, []);

  const productIndex = products.findIndex((product) => product.productId === productId);
  const product = productIndex !== -1 ? products[productIndex] : null;

  const thumbnails = product ? product.thumbnails : [];
  const productName = product ? product.name : '';

  const handleClick = () => {
    const carousel = document.querySelector('.carousel');
    const carouselInstance = M.Carousel.getInstance(carousel);
    carouselInstance.next();
  };
  return (
    <div>
       <div className="carousel-container">
        <div className="carousel">
          {thumbnails.map((thumbnail, index) => (
            <a
              key={`${productId}-${index}`}
              className="carousel-item"
              href="#!"
            >
              <img
                src={thumbnail}
                alt={product?.name}
                onClick={handleClick}
              />
            </a>
          ))}
        </div>
      </div>
      <center>
        <h2>
          <b>{productName}</b>
        </h2>
      </center>
    </div>
  )
}

export default Carousel
