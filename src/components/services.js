import React from "react";
import BannerImage from './images/services we provide img.png';
import "./css/home.css";
import consultingImage from './images/Consulting img.png';
import estimateImage from './images/Estimate img.png';
import planningImage from './images/Plan and design img.png';
import constructionImage from './images/Construction img.png';
import FloorImage from './images/Flooring work img.png';
import paintingImage from './images/Painting img.png';
import ElevationImage from './images/3d elevation img.png';
import ElectricImage from './images/Electric Work.png';
import InteriorImage from './images/Interior work img.png';
import RenovationImage from './images/Renovation img.png';
import CarpentryImage from './images/carpentry work img.png';
import InteriorImage1 from './images/Export design img.png'
const Services = () => {
    return (
        <div className="container-Fluid">
            <div className='banner'>
                <img src={BannerImage} alt="banner" />
            </div>
            <div className='whychoose'>
                <h1><span>Services </span>We Provide</h1>
                <p>We offer a comprehensive range of construction services, including residential and commercial building, renovation, interior design, and project management.
                    Our skilled team ensures high-quality craftsmanship, timely delivery, and cost-effective solutions. From concept to completion, we turn your ideas into
                reality with excellence and reliability.</p>
            </div>
            <div className='service-det'>
                <div className='service-img'>
                    <img src={consultingImage} alt='builders' />
                   <a href="ConsultingPage" ><button>Consulting</button></a>
                </div>
                <div className='service-img'>
                    <img src={estimateImage} alt='builders' />
                   <a href="Estimate"><button>Estimate</button></a>
                </div>
                <div className='service-img1'>
                    <img src={planningImage} alt='builders' />
                    <a href="Planing"><button>Plan & Design</button></a>
                </div>
                <div className='service-img2'>
                    <img src={constructionImage} alt='builders' />
                   <a href="Construction"><button>Construction</button></a>
                </div>

                <div className='service-img'>
                    <img src={FloorImage} alt='builders' />
                    <a href="Flooring"><button>Flooring work</button></a>
                </div>
                <div className='service-img'>
                    <img src={paintingImage} alt='builders' />
                    <a href="Painting"><button>Painting work</button></a>
                </div>
                <div className='service-img'>
                    <img src={ElevationImage} alt='builders' />
                    <a href="Elevation"><button>3D Elevation Design</button></a>
                </div><div className='service-img'>
                    <img src={ElectricImage} alt='builders' />
                  <a href="Electric"><button>Electic work</button></a>
                </div>
                  
                <div className='service-img'>
                    <img src={InteriorImage} alt='builders' />
                   <a href="Interiorwork"><button>Interior work</button></a>
                </div>
                <div className='service-img'>
                    <img src={RenovationImage} alt='builders' />
                    <a href="Renovation"><button>Renovation work</button></a>
                </div>
                <div className='service-img'>
                    <img src={InteriorImage1} alt='builders' />
                   <a href="Interior"><button>Interior Design</button></a>
                </div>
                <div className='service-img'>
                    <img src={CarpentryImage} alt='builders' />
                    <a href="Carpentary"><button>Carpentry work</button></a>
                </div>
            </div>


        </div>
    );
};
export default Services