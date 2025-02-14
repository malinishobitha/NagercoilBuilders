import React from 'react';
import Elevationimage from './images/3d Elevation carosel.png';
import Elevationimage1 from './images/service 3d elevation img.png';
function ElevationPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Elevationimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2>3D- <span>Elevation</span> Design</h2>
                    <p>3D elevation design refers to the process of 
creating a three-dimensional visual 
representation of a building's exterior. This 
design technique allows architects and 
designers to showcase the height, structure, and 
appearance of a building from all angles, 
offering a more realistic and detailed view than 
traditional 2D plans. 3D elevation designs are 
used in architecture, real estate, and 
construction to help clients visualize the final 
product, make informed decisions, and enhance 
the overall aesthetic appeal of the structure. It 
can include elements like textures, materials, 
lighting, and landscaping to present a lifelike 
portrayal of the building.</p>
                </div>
                <div className='consulting-img'>
                    <img src={Elevationimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default ElevationPage