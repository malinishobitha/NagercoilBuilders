import React from 'react';
import ElectricImage from './images/Eletronic Work carosel.png';
import ElectricImage1 from './images/Service electric img.png';
function ElectricPage() {
    return (
        <div className='container-Fluid'>
            <div className='banner'>
                <img src={ElectricImage} alt="Banner" />
            </div>
            <div className='consulting-det'>
                <div className='consulting-details'>
                    <h2><span>Electric</span></h2>
                    <p>Electronic work services for construction builders
                        involve the installation, maintenance, and repair
                        of electrical systems in buildings. These services
                        include wiring, lighting, electrical panels, and
                        communication systems, ensuring that a
                        construction project meets safety codes and
                        provides reliable, energy-efficient solutions.
                        Skilled electricians work closely with construction
                        teams to integrate electrical components
                        seamlessly into new builds or renovations, ensuring
                        a functional, safe, and modern infrastructure for
                        both residential and commercial properties</p>
                </div>
                <div className='consulting-img'>
                    <img src={ElectricImage1} alt='Consulting-image' />
                </div>
            </div>
        </div>

    );
};
export default ElectricPage