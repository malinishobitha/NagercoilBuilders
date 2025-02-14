import React from 'react';
import InteriorImage from './images/Interior work carosel.png';
import Interiorimage1 from './images/service Interior img.png';
function InteriorPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={InteriorImage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Interior</span> Design</h2>
                    <p>Interior design is the art and science of
                        enhancing the interiors of a space to create a
                        more aesthetically pleasing and functional
                        environment. It involves selecting color schemes,
                        furniture, lighting, and decor that reflect the style
                        and purpose of the space, while also addressing
                        practical needs such as layout, ergonomics, and
                        storage. Interior designers consider factors like
                        spatial arrangement, texture, and the overall
                        mood to craft spaces that are both visually
                        appealing and comfortable for the people who
                        use them.</p>
                </div>
                <div className='consulting-img'>
                    <img src={Interiorimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default InteriorPage