import React from 'react';
import Estimateimage from './images/Estimate carosel img.png'
import Estimateimage1 from './images/Estimate service img.png'
function EstimatePage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Estimateimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2>Estimate</h2>
                    <p>An estimate is an approximate calculation or
                        assessment of the value, quantity, time, or cost
                        of something. In business, estimates are often
                        used for project planning, budgeting, and
                        resource allocation, providing a rough idea
                        of the expected outcomes based on available
                        information. While estimates aren't exact, they
                        serve as useful tools for decision-making, helping
                        organizations prepare and prioritize tasks while
                        accounting for uncertainties</p>
                </div>
                <div className='consulting-img'>
                    <img src={Estimateimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default EstimatePage