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
                            <a href='/'><img src={logoImage} alt='logo' /></a>
                        </div>
                        <div className='footer-details'>
                            <h1><span>Nagercoil </span>Builders</h1>
                            <p>Nagercoil Builders offering a range of services from residential and commercial building to interior design and renovation.</p>
                            <div className='icons'>
                                <a href='https://www.instagram.com/nagercoilbuilderss/'><i class="bi bi-instagram"></i></a>
                                <a href='https://api.whatsapp.com/send?phone=91 9597751076&text=Hello!%20I%20need%20some%20information."'><i class="bi bi-whatsapp"></i></a>
                                {/* <i class="bi bi-youtube"></i>
                 <i class="bi bi-facebook"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-det'>
                    <h1><span>Categories</span></h1>
                    <a href='/'><h5>Home</h5></a>
                    <a href='About'><h5>About Us</h5></a>
                    <a href='services'><h5>Services</h5></a>
                    <a href='Package'><h5>Plans & Pricing</h5></a>
                    <a href='Enquiryform'><h5>Enquiry</h5></a>
                </div>
                <div className='footer-det'>
    <h1><span>Contact Us</span></h1>

    <div className='builder-details1'>
        <div className='footer-icon'>
            <i className="bi bi-telephone-fill"></i>
        </div>
        <div className='contact-det'>
            <h5>
                <a href='tel:+91 9597751076'>+91 9597751076</a>,
                <a href='tel:+91 9443102048'>9443102048</a>
            </h5>
        </div>
    </div>

    <div className='builder-details1'>
        <div className='footer-icon'>
            <i className="bi bi-envelope"></i>
        </div>
        <div className='contact-det'>
            <h5>
                <a href="mailto:nagercoilbuilders31@gmail.com" target="_blank" rel="noopener noreferrer">
                    nagercoilbuilders31@gmail.com
                </a>
            </h5>
        </div>
    </div>

    <div className='builder-details1'>
        <div className='footer-icon'>
            <i className="bi bi-globe"></i>
        </div>
        <div className='contact-det'>
            <h5>
                <a href='/' target="_blank" rel="noopener noreferrer">
                    www.nagercoilbuilders.com
                </a>
            </h5>
        </div>
    </div>

    <div className='builder-details1'>
        <div className='footer-icon'>
            <i className="bi bi-geo-alt"></i>
        </div>
        <div className='contact-det'>
           <h5> <a href='https://www.google.com/maps/place/4,+Azhagaipuri,+Adaikalapattanam,+Tamil+Nadu+627808/@8.8888665,77.4306255,19z/data=!4m6!3m5!1s0x3b0426823713b8a1:0x8a8eb5f45587b32f!8m2!3d8.8888909!4d77.431231!16s%2Fg%2F11w_wg861l?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D' 
               target="_blank" rel="noopener noreferrer">
                4/26A Adaikalapattinam, Pavoorchatram.
            </a>
            </h5>
        </div>
    </div>
</div>

                
            </div>

        </div >
    );
};
export default Footer;