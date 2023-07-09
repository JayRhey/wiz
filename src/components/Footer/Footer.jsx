import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <div className='row row-footer'>
          <div className='container-fluid-custom-footer'>
              <img src="https://www.wizmaxglobal.com/images/logos/footer-logo-v2.png" alt="" className="footer-img responsive-img" />
              <div class="footer-captions"><h5>HANMI MICRONICS © ALL RIGHTS RESERVED.</h5>
                  <p>It is prohibited to publish materials and links related to mallards, wares, bots, exploits and
                    other things that may be attributed to dishonest play or violation of the rights of players and
                      developers/publishers of games and other software. By registering at the forum,
                      you agree to receive letters from the administration and newsletters from the portal.
                      You can refuse to receive newsletters at any time by clicking on the special link at the bottom of
                      the message, when receiving the first email.</p><p>Some images used for product photos are rendered
                          3D models that may have slight differences compared to the actual product.
                    Product specifications may change without prior notice.</p></div>
          </div>
    </div>
  )
}

export default Footer
