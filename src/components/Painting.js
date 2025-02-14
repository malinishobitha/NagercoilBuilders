import React from 'react';
import PaintingImage from './images/painting carosel image.png';
import PaintingImage1 from './images/service painting img.png';
function PaintingPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={PaintingImage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Painting </span>Work</h2>
                    <p>Painting is a form of visual art that involves
applying pigment to a surface, such as canvas,
wood, or paper, to create expressive images or
designs. It has been a means of human 
expression for centuries, evolving through different
styles and techniques. From traditional oil and 
watercolor paintings to modern abstract works, 
painting allows artists to convey emotions, ideas,
and stories. It serves as both an aesthetic pursuit 
and a way to explore the world, offering a timeless 
medium for creativity and personal reflection.</p>
                </div>
                <div className='consulting-img'>
                    <img src={PaintingImage1} alt='Consulting-image'/>
                </div>
            </div>
        </div>

    );
};
export default PaintingPage