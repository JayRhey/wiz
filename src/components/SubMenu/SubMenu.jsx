import React from 'react'
import './SubMenu.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const SubMenu = () => {
  return (
    <div>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://www.wizmaxglobal.com/images/micronics-assets/product-images/Mouse-1.png" width="130" alt="/images/micronics-assets/product-images/Mouse-1.png" />
                <div>Mouse</div>
            </Link>
        </li>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://www.wizmaxglobal.com/images/micronics-assets/product-images/Keyboard-1.png" width="130" alt="/images/micronics-assets/product-images/Keyboard-1.png" />
                <div>Keyboard</div>
            </Link>
        </li>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://www.wizmaxglobal.com/images/micronics-assets/product-images/Headset-1.png" width="130" alt="/images/micronics-assets/product-images/Headset-1.png" />
                <div>Headset</div>
            </Link>
        </li>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://www.wizmaxglobal.com/images/micronics-assets/product-images/Fans%20Coolers-1.png" width="130" alt="/images/micronics-assets/product-images/Fans Coolers-1.png" />
                <div>Fans &amp; Coolers</div>
            </Link>
        </li>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://res.cloudinary.com/ddwocxwmc/image/upload/v1672912245/product-images/pc_case/EH-1_Mondrian_-4_kuvx4z.png" width="130" />
                <div>PC Case</div>
            </Link>
        </li>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://www.wizmaxglobal.com/images/micronics-assets/product-images/PSU-1.png" width="130" alt="/images/micronics-assets/product-images/PSU-1.png" />
                <div>Power Supplies</div>
            </Link>
        </li>
        <li className="sub-navbar-items nav-item">
            <Link to="/404" className='SubMenu'>
                <img src="https://www.wizmaxglobal.com/images/micronics-assets/product-images/Accessories.svg" width="130" alt="/images/micronics-assets/product-images/Accessories.svg" />
                <div>Accessories</div>
            </Link>
        </li>
    </div>
  )
}

export default SubMenu
