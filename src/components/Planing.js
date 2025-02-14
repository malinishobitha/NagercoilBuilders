import React from 'react';
import Planingimage from './images/Services plan and design carosel.png';
import Estimateimage1 from './images/service plan and design img.png';
function PlaningPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Planingimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2>Plan <span>and </span>Design</h2>
                    <p>Our expert team specializes in creating innovative
                        and functional designs tailored to your needs.
                        We provide detailed planning, architectural
                        design, and 3D modeling to bring your vision to
                        life. With a focus on efficiency, aesthetics, and
                        sustainability, we ensure a seamless transition
                        from concept to construction</p>
                </div>
                <div className='consulting-img'>
                    <img src={Estimateimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default PlaningPage