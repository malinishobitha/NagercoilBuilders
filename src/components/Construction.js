import React from 'react';
import Constructionimage from './images/constructions  carosel.png';
import Constructionimage1 from './images/Service constrution img.png';
function ConstructionPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Constructionimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2>Construction</h2>
                    <p>Construction is the process of building structures
such as houses, bridges, roads, and skyscrapers. 
It involves planning, designing, and executing 
projects using various materials and techniques. 
The construction industry plays a vital role in 
infrastructure development, economic growth, 
and urbanization. It includes different sectors 
like residential, commercial, industrial, and civil 
engineering. Safety, sustainability, and innovation
are key aspects of modern construction practices.</p>
                </div>
                <div className='consulting-img'>
                    <img src={Constructionimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default ConstructionPage