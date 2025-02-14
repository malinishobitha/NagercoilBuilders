import React from 'react';
import Carpentryimage from './images/Carpentry carosel img.png';
import Carpentaryimage1 from './images/service carpentry img.png';
function CarpentryPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Carpentryimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Renovation </span>Work</h2>
                    <p>Carpentry encompasses a range of activities,
from creating furniture and cabinetry to 
framing buildings and constructing floors 
and roofs. Carpenters combine precision 
and creativity to bring design plans to life,
often requiring both craftsmanship and 
problem-solving abilities to meet specific 
requirements. It’s a versatile profession that
blends art with functionality.</p>
                </div>
                <div className='consulting-img'>
                    <img src={Carpentaryimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default CarpentryPage