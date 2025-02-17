import React from "react";
import AboutImage from './images/About us img.png';
import AboutImage1 from './images/About us 1 img.png';

const About = () => {
    return (
        <div className="container-Fluid">
            <div className="banner">
                <img src={AboutImage} alt="banner" />
            </div>
            <div className="About-us">
                <h1><span>About</span> Us</h1>
            </div>
            <div className="About-det">
                <div className="About-img">
                    <img src={AboutImage1} alt='about-image' />
                </div>
                <div className="About-details">
                    <p>At <span>Nagercoil builders </span>we specialize in construciting innovative and tailored your vision. 
                    With years of expertise ad a commitment to excellence we deliver projects that combine functionality, aesthetics and sustainability.  
                    From design to delivery, we ensure every step of the process meets the highest standards. </p>
                </div>
            </div>
        </div>
    );
};
export default About