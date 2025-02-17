import React from 'react';
import logoImage from './images/LOGO IMG.png';
import './css/Footer.css';
function Footer() {
    return (
        <div className='container-Fluid'>
            <div className='footer'>
                <div className='footer-det'>
                    <div className='builder-details'>
                    <div className='footer-img'>
                 <img src={logoImage} alt='logo'/>
                 </div>
                 <div className='footer-details'>
                 <h1><span>Nagercoil </span>Builders</h1>
                 <p>Nagercoil Builders offering a range of services from residential and commercial building to interior design and renovation.</p>
                 <div className='icons'>
                 <i class="bi bi-instagram"></i>
                 <i class="bi bi-youtube"></i>
                 <i class="bi bi-facebook"></i>
                 </div>
                 </div>
                 </div>
                </div>
                <div className='footer-det'>
                    <h1><span>Categories</span></h1>
                    <h5>Home</h5>
                    <h5>About Us</h5>
                    <h5>Why Choose US</h5>
                    <h5>Services</h5>
                </div>
                <div className='footer-det'>
                    <h1><span>Contact Us</span></h1>
                    <h5><i class="bi bi-telephone-fill">  </i>&nbsp;&nbsp;+91 9597751076, 9443102048</h5><br></br>
                    <h5><i class="bi bi-envelope">  </i>&nbsp;&nbsp;  nagercoilbuilders31@gmail.com</h5><br></br>
                    <h5><i class="bi bi-globe">  </i>&nbsp;&nbsp;  www.nagercoilbuilders.com</h5><br></br>
                    <h5><i class="bi bi-geo-alt">  </i>&nbsp;&nbsp;  4/26A Adaikalapattinam, Pavoorchatram.</h5>
                </div>
            </div>
          
        </div>
    );
};
export default Footer;