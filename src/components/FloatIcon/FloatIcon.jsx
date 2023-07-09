import React, { useEffect, useRef } from 'react';
import './FloatIcon.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import products from '../../data/data';
import { Link } from 'react-router-dom';

const FloatIcon = ({ productId }) => {
  const currentProductIndex = products.findIndex((product) => product.productId === productId);
  const nextProductIndex = (currentProductIndex + 1) % products.length;
  const product = products[nextProductIndex];

  const thumbnails = product ? product.thumbnails : [];
  const productName = product ? product.name : '';

  const floatButtonRef = useRef(null);

  useEffect(() => {
    M.FloatingActionButton.init(floatButtonRef.current, {
      hoverEnabled: true,
      direction: 'top'
    });
  }, []);

  return (
    <div >
      <div className="fixed-action-btn">
        <a href={`/product/${product.productId}`} className="btn-floating btn-large learn-more-btn">
          <img src={thumbnails[0]} alt={product?.name} className="float-img responsive-image" style={{ width: '50px', height: '50px' }} />
          <b className="black-text left">{productName}</b>
        </a>
      </div>
      <div ref={floatButtonRef} className="fixed-action-btn hide-on-large-only">
        <a className="btn-floating btn-large cyan pulse">
          <i className="large material-icons">format_align_justify</i>
        </a>
        <ul className="float-icons">
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-solid fa-computer-mouse"></i></Link></li>
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-solid fa-keyboard"></i></Link></li>
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-solid fa-headset"></i></Link></li>
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-solid fa-fan"></i></Link></li>
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-solid fa-computer"></i></Link></li>
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-solid fa-power-off"></i></Link></li>
          <li><Link to="/404" className="btn-floating cyan"><i className="fa-sharp fa-solid fa-gamepad"></i></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default FloatIcon;
