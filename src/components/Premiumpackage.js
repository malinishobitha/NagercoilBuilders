import React from "react";
import PlanImage from './images/plan 1.png';
import FoundationImage from './images/foundation 1.png';
import BrickImage from './images/Brick wall 1.png';
import SandImage from './images/sand 1.png';
import CementImage from './images/cement 1.png';
import SteelImage from './images/steel 1.png';
import WoodImage from './images/wood 1.png';
import DoorImage from './images/door 1.png';
import WireImage from './images/wire 1.png';
import SwitchImage from './images/switch 1.png';
import SwitchboardImage from './images/switchboard 1.png';
import SanitaryImage from './images/bath 1.png';
import TapImage from './images/Tap1.png';
import FlooringImage from './images/tiles 1.png';
import LightImage from './images/ceiling-lamp 1.png';
import PaintingImage from './images/painting 1.png';
import TankImage from './images/water-tank 1.png';
import SumpImage from './images/tank 1.png';
import EbImage from './images/electric-factory 1.png';
import CompoundImage from './images/Compound wall(1) 1.png';
import AdditionalImage from './images/foundation.png';
import BoreImage from './images/electric-motor 1.png';
import { Link, useLocation } from "react-router-dom";
import premiumbannerImage from './images/Premium Package image.png'

const Premiumpackage = () => {
    const location = useLocation();
    return (
        <div className="container-Fluid">
                    <div className="banner">
             <img src={premiumbannerImage}alt="bannerimage"/>
         </div>
            <div className='whychoose'>
                <h1>Choose Your <span>Design</span> Packages</h1>
                <p>Our Design Package feature allows you to select a construction design plan that best fits your vision and budget.
                    Whether you need a Basic, Standard, or Premium package, we offer tailored solutions with detailed architectural
                    layouts, 3D renderings, and expert consultations.</p>
            </div>

            <div className="package-button">
            <Link to="/Package">
                <button className={location.pathname === "/Package" ? "active" : ""}>
                    Basic Package
                </button>
            </Link>
            <Link to="/Standardpackage">
                <button className={location.pathname === "/Standardpackage" ? "active" : ""}>
                    Standard Package
                </button>
            </Link>
            <Link to="/Premiumpackage">
                <button className={location.pathname === "/Premiumpackage" ? "active" : ""}>
                    Premium Package
                </button>
            </Link>
        </div>


            <div className="package-det">
                <div className="triangle-left"></div>
                <div className="triangle-right"></div>
                <h1 className="animated-heading">Premium</h1>
                <h2 className="animated-heading">Package</h2>
                <h3 className="price">
                    <span className="currency">₹</span> 2500
                </h3>
                <p className="subtext">Per Sq Feet</p>
            </div>

            <div className="arc-line-container">
                <div className="arc-line"></div>
                <div className="circle-container">
                    <div className="circle-left"></div>
                    <div className="circle-right"></div>
                </div>
                <div className="Features">
                    <div className="Features-det2">
                        <div className="Features-head">
                            <div className="triangle-left1"></div>
                            <div className="triangle-right1"></div>
                            <h2>Construction</h2>
                        </div>
                        <div className="Features-details1">
                            <div className="package">
                                <img src={PlanImage} alt='plan' />
                                <p> Plan - 2D + 3D Only</p>
                            </div>
                            <div className="package">
                                <img src={FoundationImage} alt="foundation" />
                                <p> Foundation - Load Bearing (Pillar Foundation)</p>
                            </div>
                            <div className="package">
                                <img src={BrickImage} alt="brick" />
                                <p> Brick - Champour Brick </p>
                            </div>
                            <div className="package">
                                <img src={SandImage} alt="sand" />
                                <p> Sand - M Sand</p>
                            </div>
                            <div className="package">
                                <img src={CementImage} alt="cement" />
                                <p> Cement - Shankar</p>
                            </div>
                            <div className="package">
                                <img src={SteelImage} alt="steel" />
                                <p> Steel - 550 D (TATA Steel)</p>
                            </div>
                            <div className="package">
                                <img src={FlooringImage} alt="flooring" />
                                <p>Flooring - Granite</p>
                            </div>
                        </div>
                          </div>
                          <div className="Features-det2">
                        <div className="Features-head">
                            <div className="triangle-left1"></div>
                            <div className="triangle-right1"></div>
                            <h2>Electrical Work</h2>
                        </div>
                        <div className="Features-details1">
                            <div className="package">
                                <img src={WireImage} alt="wire" />
                                <p> Wire - KEI</p>
                            </div>
                            <div className="package">
                                <img src={SwitchImage} alt="switch" />
                                <p>Switch - Gold Metal </p>
                            </div>
                            <div className="package">
                                <img src={SwitchboardImage} alt="switch" />
                                <p>Switch Board - Metal Board </p>
                            </div>
                            <div className="package">
                                <img src={LightImage} alt="flooring" />
                                <p>Lights - All Lights (Interior + Exterior)</p>
                            </div>
                            <div className="package">
                                <img src={WireImage} alt="wire" />
                                <p>Wiring - Three Phase Wires</p>
                            </div>
                        </div>
                        </div>
                        <div className="Features-det2">
                            <div className="Features-head">
                                <div className="triangle-left1"></div>
                                <div className="triangle-right1"></div>
                                <h2>Plumping & Painting</h2>
                            </div>
                            <div className="Features-details1">
                            <div className="package">
                     <img src={SanitaryImage} alt="sanitary"/> 
                     <p>Sanitary - 1 Western Closet + mixed washbasein</p>
                     </div>
                     <div className="package">
                     <img src={TapImage} alt="tap"/>
                     <p> Tape Fittings - Cera CP Fittings Normal</p>
                     </div>
                     <div className="package">
                     <img src={PaintingImage}alt="paint"/>
                     <p>Painting- Wall Putty + Primer +2 Layer Color Painting</p>
                     </div>
                     <div className="package">
                     <img src={TankImage} alt="tank"/> 
                     <p>Overhead Tank - 1000 Litre (one piece)</p>
                     </div>
                     <div className="package">
                     <img src={SumpImage} alt="sump"/> 
                     <p>3000 Litre Sump + Septic Tank Free</p>
                     </div>
                            </div>
                        </div>
                        <div className="Features-det2">
                        <div className="Features-head">
                            <div className="triangle-left1"></div>
                            <div className="triangle-right1"></div>
                            <h2>Extra Work</h2>
                        </div>
                        <div className="Features-details1">
                        <div className="package">
                     <img src={EbImage} alt="sump"/> 
                     <p>Temporary EB Connection</p>
                     </div>
                     <div className="package">
                     <img src={CompoundImage} alt="compound"/>
                     <p> Compound Wall</p>
                     </div>
                     <div className="package">
                     <img src={AdditionalImage} alt="foundation"/>
                     <p>Foundation Additional Height</p>
                     </div>
                     <div className="package">
                     <img src={BoreImage} alt="bore"/>
                     <p> Borewell + Motor Fittings + Labor Charges</p>
                     </div>
                     <div className="package">
                     <img src={WoodImage} alt="wood"/>
                     <p> Wood - Teek</p>
                     </div>
                     <div className="package">
                     <img src={DoorImage} alt="door"/> 
                     <p>Door - Door-Teek(All Door Window Frame) </p>
                     </div>
                        </div>

                    </div>
                  
                </div>
                <a href="EnquiryForm"><button className="booknow">Book Now</button></a>
</div>
        </div>
    );
};

export default Premiumpackage;
