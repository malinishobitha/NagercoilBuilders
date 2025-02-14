import React from "react";
import BannerImage from './images/Design package img 2.png';
import BackgroundBanner from './images/Design package img 1.png'
const Contact = () => {
    return (
        <div>
        <div className="container-Fluid">
            <div className='banner'>
                <img src={BannerImage} alt="banner" />
            </div>
            <div className='whychoose'>
                <h1>Choose Your <span>Design </span>Packages</h1>
                <p>Our Design Package feature allows you to select a construction design
                    plan that best fits your vision and budget. Whether you need a basic, Standard, or
                    Premium package, we offer tailored solutions with detailed architectural layouts, 3D
                    renderings, and expert consultations. Simplify your construction journey with a design
                    package that meets your needs!</p>
            </div>
             <div className="background-banner">
                <img src={BackgroundBanner} alt="banner"/>
                <div className="bulding-det">
                    <div className="package-det">
                        <h1><span>Basic</span> Package</h1>
                        <ul>
                            <li>Scheme Drawing : All Floors (2D)</li>
                            <li>Furniture Layout: All Floors (2D)</li>
                            <li>Elevation Design (3D)</li>
                            <li>Electrical Drawing : All Floors (2D)
                            </li>
                            <li>Plumbing Drawing : All Floors(2D) </li>
                            <li>Work Drawing: All Floors(2D) </li>
                            <li>Delivery Time</li>
                        </ul>
                        <button>Book Now</button>
                    </div>
                    <div className="package-det1">
                        <h1><span>Standard</span> Package</h1>
                        <ul>
                            <li>Scheme Drawing : All Floors (2D)</li>
                            <li>Furniture Layout: All Floors (2D)</li>
                            <li>Elevation Design (3D)</li>
                            <li>Electrical Drawing : All Floors (2D)
                            </li>
                            <li>Plumbing Drawing : All Floors(2D) </li>
                            <li>Work Drawing: All Floors(2D) </li>
                            <li>Soil Testing Report  </li>
                            <li>Structural Drawing   </li>
                            <li>SITE Assessment & SITE Plan
                            </li>
                            <li>Elevation Detail Drawing (2D)
                            </li>
                            <li>Delivery Time</li>
                        </ul>
                        <button>Book Now</button>
                    </div>
                    <div className="package-det2">
                        <h1><span>Premium</span> Package</h1>
                        <ul>
                            <li>Scheme Drawing : All Floors (2D)</li>
                            <li>Furniture Layout: All Floors (2D)</li>
                            <li>Elevation Design (3D)</li>
                            <li>Electrical Drawing : All Floors (2D)
                            </li>
                            <li>Plumbing Drawing : All Floors(2D) </li>
                            <li>Work Drawing: All Floors(2D) </li>
                            <li>Soil Testing Report  </li>
                            <li>Structural Drawing   </li>
                            <li>SITE Assessment & SITE Plan
                            </li>
                            <li>Elevation Detail Drawing (2D)
                            </li>
                            <li>Half Layout : All Floors(3D)
                            </li>
                            <li>Interior Views : All Rooms(3D)
                            </li>
                            <li>Interior Detailing : All Rooms(2D)
                            </li>
                            <li>Material & Brand Selection
                            </li>
                            <li>Landspacing Architecture Designing
                            </li>
                            <li>Topographical Survey
                            </li>
                            <li>Delivery Time</li>
                        </ul>
                        <button>Book Now</button>
                    </div>
                    </div>
             </div>
             </div>
             </div>
        
    );
};
export default Contact
