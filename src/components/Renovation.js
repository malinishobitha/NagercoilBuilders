import React from 'react';
import Renovationimage from './images/Renovation carosel img.png';
import Renovationimage1 from './images/service Renovation img.png';
function RenovationPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Renovationimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Renovation </span>Work</h2>
                    <p>Renovation work services for construction
                        builders involve a range of professional
                        solutions aimed at transforming existing
                        structures to meet modern standards or
                        specific client needs. Builders in this field
                        offer expert craftsmanship in areas such
                        as plumbing, electrical, carpentry, flooring,
                        and painting, ensuring the renovation process
                        is seamless and high-quality. Whether it’s
                        upgrading a home, office, or commercial space,
                        these services provide cost-effective ways to
                        breathe new life into any property</p>
                </div>
                <div className='consulting-img'>
                    <img src={Renovationimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default RenovationPage