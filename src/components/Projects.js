import React from "react";
import BannerImage from './images/OurProjectscaroselimg.png';
import './css/home.css';
import buildingimg1 from './images/proj 1.png';
import buildingimg2 from './images/Proj 2.png';
import buildingimg3 from './images/Proj 3.png';
import buildingimg4 from './images/Proj 4.png';
import buildingimg5 from './images/Proj 5.png';
import buildingimg6 from './images/Proj 6.png';
const Projects = () => {
    return (
         <div className="container-Fluid">
            <div className="banner">
                <img src={BannerImage} alt="banner"/>
            </div>
            <div className="building-project">
                <h1>Our <span>Milestones</span></h1>
            </div>
            <div className="building-projctimg">
                <img src={buildingimg1} alt='building-image'/>
                <img src={buildingimg2} alt='building-image'/>
                <img src={buildingimg3} alt='building-image'/>
                <img src={buildingimg4} alt='building-img'/>
                <img src={buildingimg5} alt='building-img'/>
                <img src={buildingimg6} alt='building-img'/>


            </div>
         </div>
    );
};
export default Projects