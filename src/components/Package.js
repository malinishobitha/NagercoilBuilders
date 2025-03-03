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
import basicbannerImage from './images/Basic package image.png'
import BoreImage from './images/electric-motor 1.png';
import { Link, useLocation } from "react-router-dom";
const Package = () => {
    const location = useLocation();
    return (
        <div className="container-Fluid">
           <div className="banner">
    <img src={basicbannerImage}alt="bannerimage"/>
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
                <h1>Basic</h1>
                <h2>Package</h2>
                <h3 className="price">
                    <span className="currency">₹</span> 1600
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
                    <div className="Features-det">
                        <div className="Features-head">
                            <div className="triangle-left1"></div>
                            <div className="triangle-right1"></div>
                            <h2>Construction</h2>
                        </div>
                        <div className="Features-details">
                            <div className="package">
                                <img src={PlanImage} alt='plan' />
                                <p> Plan - 2D Only</p>
                            </div>
                            <div className="package">
                                <img src={FoundationImage} alt="foundation" />
                                <p> Foundation - Load Bearing (Black Stone Foundation)</p>
                            </div>
                            <div className="package">
                                <img src={BrickImage} alt="brick" />
                                <p> Brick - Country Brick</p>
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
                                <p> Steel - 550 D TMT</p>
                            </div>
                            <div className="package">
                                <img src={FlooringImage} alt="flooring" />
                                <p>Flooring - Tiles 40 Rs per Sq Feet</p>
                            </div>
                        </div>
                          </div>
                          <div className="Features-det">
                        <div className="Features-head">
                            <div className="triangle-left1"></div>
                            <div className="triangle-right1"></div>
                            <h2>Electrical Work</h2>
                        </div>
                        <div className="Features-details">
                            <div className="package">
                                <img src={WireImage} alt="wire" />
                                <p> Wire - Kundan</p>
                            </div>
                            <div className="package">
                                <img src={SwitchImage} alt="switch" />
                                <p>Switch Hi Fi (Normal)</p>
                            </div>
                            <div className="package">
                                <img src={SwitchboardImage} alt="switch" />
                                <p>Switch Board -Wooden Board</p>
                            </div>
                            <div className="package">
                                <img src={LightImage} alt="flooring" />
                                <p>Lights - Limited</p>
                            </div>
                            <div className="package">
                                <img src={WireImage} alt="wire" />
                                <p>Wiring - Single Phase Wires</p>
                            </div>
                        </div>
                        </div>
                        <div className="Features-det">
                            <div className="Features-head">
                                <div className="triangle-left1"></div>
                                <div className="triangle-right1"></div>
                                <h2>Plumping & Painting</h2>
                            </div>
                            <div className="Features-details">
                            <div className="package">
                     <img src={SanitaryImage} alt="sanitary"/> 
                     <p>Sanitary - 1 Western Closet + Normal Shower</p>
                     </div>
                     <div className="package">
                     <img src={TapImage} alt="tap"/>
                     <p> Tape Fittings - PVC Fittings Normal</p>
                     </div>
                     <div className="package">
                     <img src={PaintingImage}alt="paint"/>
                     <p>Painting - White wash only</p>
                     </div>
                     <div className="package">
                     <img src={TankImage} alt="tank"/> 
                     <p>Overhead Tank - 1000 Litre (one piece)</p>
                     </div>
                     <div className="package">
                     <img src={SumpImage} alt="sump"/> 
                     <p>2000 Litre Sump + Septic Tank Free</p>
                     </div>
                            </div>
                        </div>
                        <div className="Features-det">
                        <div className="Features-head">
                            <div className="triangle-left1"></div>
                            <div className="triangle-right1"></div>
                            <h2>Extra Work</h2>
                        </div>
                        <div className="Features-details">
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
                     <p> Wood - Vembu (Nilai + Jannal)</p>
                     </div>
                     <div className="package">
                     <img src={DoorImage} alt="door"/> 
                     <p>Door - Laminate Door</p>
                     </div>
                        </div>

                    </div>
                  
                </div>
                <a href="Enquiryform"><button className="booknow">Book Now</button></a>
</div>
        </div>
    );
};

export default Package;
