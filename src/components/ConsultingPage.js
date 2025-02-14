import React from 'react';
import ConsultingImage from './images/Consulting carosel img.png';
import ConsultingImage1 from './images/Consulting service img.png';
function ConsultingPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={ConsultingImage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2>Consulting</h2>
                    <p>Consulting involves providing expert advice
                        and solutions to organizations or individuals
                        in specific areas of expertise. Consultants
                        assess challenges, analyze data, and recommend
                        strategies to improve efficiency, solve problems,
                        and drive growth. This service can span various
                        industries, from technology and management to
                        marketing and finance. Consultants are often
                        hired for their specialized knowledge, offering
                        fresh perspectives and helping clients navigate
                        complex situations</p>
                </div>
                <div className='consulting-img'>
                    <img src={ConsultingImage1} alt='Consulting-image'/>
                </div>
            </div>
        </div>

    );
};
export default ConsultingPage