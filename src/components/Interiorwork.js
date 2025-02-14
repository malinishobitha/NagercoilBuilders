import React from 'react';
import Interiorworkimage from './images/Services carosel img.png';
import Interiorworkimage1 from './images/Interior img.png';
function InteriorworkPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={Interiorworkimage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Interior</span>Work</h2>
                    <p>Interior work services for construction builders
                        encompass a wide range of solutions designed
                        to enhance the aesthetics, functionality, and
                        comfort of a space. These services typically
                        include designing and installing interior elements
                        such as walls, flooring, ceilings, lighting, cabinetry,
                        and furniture. Skilled professionals work closely with
                        builders to ensure that the interior spaces align with
                        the overall design vision, meet structural requirements,
                        and create a harmonious atmosphere. Whether it's
                        residential or commercial projects, interior work
                        services add the finishing touches that make spaces
                        livable, productive, and visually appealing</p>
                </div>
                <div className='consulting-img'>
                    <img src={Interiorworkimage1} alt='Consulting-image' />
                </div>
            </div>
        </div>
    );
};
export default InteriorworkPage