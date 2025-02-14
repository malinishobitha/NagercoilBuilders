import React from 'react';
import Flooringimage from './images/Flooring carosel img.png';
import Flooringimage1 from './images/service flooring img.png';
function PlaningPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Flooringimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Flooring </span>Work</h2>
                    <p>Our flooring work services provide high-quality
installation and maintenance solutions for
all types of flooring, including hardwood, tile, 
carpet, and vinyl. We cater to both residential
and commercial construction projects, offering 
precision and craftsmanship that meets industry
standards. Whether you're looking to update 
existing floors or install new ones, our team of
skilled professionals ensures a smooth, durable,
and aesthetically pleasing finish for every space.</p>
                </div>
                <div className='consulting-img'>
                    <img src={Flooringimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default PlaningPage