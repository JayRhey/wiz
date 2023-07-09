import React, { useEffect } from 'react';
import './Body.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import products from '../../data/data'

try {
  // Handle the data here
  console.log(products);
   
} catch (error) {
  console.log(error);
}



const Body = ({ productId }) => {
  useEffect(() => {
    // Initialize the tabs
    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
  }, []);

  const productIndex = products.findIndex((product) => product.productId === productId);
  const product = productIndex !== -1 ? products[productIndex] : null;
  const productBrochure = product ? product.brochure : '';

  const specification = product ? product.specification : [];



  return (
    <div className="container">
      
      <div className="row">

          <div className='col s3'></div>
          <div className="col s12 m12 l6 xl6">
              <div className="nav-wrapper position-relative mb-4">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab col s6 m12 l6 xl6"><a href="#test1" className='black-text'>BROCHURE</a></li>
                    <li className="tab col s6 m12 l6 xl6"><a  href="#test2" className='black-text'>SPECIFICATIONS</a></li>
                  </ul>
              </div>
          </div>
          <div className='col s3'></div>
      </div>
 
    <div className="tab-content" id="tabcontent2">
        <div className="tab-content-item active" id="test1">
          <img className="responsive-img" src={  productBrochure }   />
        </div>
        
        <div className="tab-content-item" id="test2">
          <div className='container'>
             <table className='striped'>
                <thead>
                  <tr>
                    <th className='left'>Specification</th>
                    <th className='right'>Description</th>
                  </tr>
                </thead>
                 <tbody>
                    {specification.map((spec, index) => (
                      <tr key={index}>
                        <td className="left">{spec.name}</td>
                        <td className="right">{spec.description}</td>
                      </tr>
                    ))}
                    {specification.length === 0 && (
                      <tr>
                        <td colSpan="2">No data available.</td>
                      </tr>
                    )}
                  </tbody>
              </table>
          </div>   
        </div>          
      </div>
      
</div>
  );
}

export default Body;
