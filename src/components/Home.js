import React from 'react';
import './css/home.css';
import bannerImage from './images/Home Page Img.jpg';
import experiencedTeamImage from './images/Experienced Team img.png';
import customizedImage from './images/Customizable  Design img.png';
import timelyImage from './images/Timely completion.png';
import qualityImage from './images/Quality Construction img.png';
import transparentImage from './images/Transparent Process img.png';
import houseteamImage from './images/In house team exports img.png';
import whychoose from './images/why choose us img.png';
import consultingImage from './images/Consulting img.png';
import estimateImage from './images/Estimate img.png';
import planningImage from './images/Architecture.jpeg';
import constructionImage from './images/Construction img.png';
import FloorImage from './images/Flooring work img.png';
import paintingImage from './images/Painting img.png';
import backgroundImage from './images/Background img.png';
import calendar from './images/Calendarted img.png';
import quality from './images/Quality guaranteed img.png';
import cost from './images/Low Cost.png';
import toprated from './images/Top Rated img.png';
import Budget from './images/Budget Friendly img.png';
import clientRieview from './images/Client review img 1.png';
import clientimage from './images/download.jpeg';
import clientReview1 from './images/client review img 2.png';
import clientReview2 from './images/Client review img 3.png';
import clientimage1 from './images/images (4).jpeg';
import clientimage2 from './images/images (5).jpeg'
function HomePage() {
    return (
        <div>
            <div className='container-Fluid'>
                <div className='banner'>
                    <img src={bannerImage} alt="Banner" />
                    <div className='banner-content'>
                        <h1>Your <span>dream</span> space, build to perfection.</h1>
                        <p>Ready to bring your project to life? Let’s create something extraordinary together. </p>
                        <a href='Enquiryform'><button>Book Now</button></a>
                    </div>
                </div>
                <div className='nagercovilbuilders'>
                    <img src={backgroundImage} alt='background' />
                    <h1><span>Nagercoil</span> Builders</h1>
                    <div className="carousel-container">
                        <div className="builder-det">
                            <div className="builder-item"><img src={calendar} alt="builders" /><p>Calenderted date</p></div>
                            <div className="builder-item"><img src={quality} alt="builders" /><p>Quality guaranteed</p></div>
                            <div className="builder-item"><img src={cost} alt="builders" /><p>Low Cost</p></div>
                            <div className="builder-item"><img src={toprated} alt="builders" /><p>Top Rated</p></div>
                            <div className="builder-item"><img src={Budget} alt="builders" /><p>Budget Friendly</p></div>
                        </div>
                    </div>
                </div>

                <div className='whychoose'>
                    <h1>Why <span>Choose</span> Us </h1>
                    <p> At Nagercoil Builders we deliver top-quality construction with precision, reliability,
                        and excellence. Our expert team ensures on-time project completion, using premium
                        materials and innovative techniques. With a commitment to safety and customer
                        satisfaction, we bring your vision to life with professionalism and integrity. Choose
                        us for a hassle free building experience!</p>
                </div>
                <div className='construction-reason'>
                    <div className='teamwork'>
                        <div className='Team'>
                            <div className='building-img'>
                                <img src={experiencedTeamImage} alt="Banner" />
                            </div>
                            <div className='details'>
                                <h5>Experienced Team</h5><br></br>
                                <p>Our experienced team combine expertise, innovation, and dedication to deliver exceptional construction
                                    results tailored to your vision.</p>
                            </div>
                        </div>
                        <div className='Team'>

                            <div className='building-img'>
                                <img src={customizedImage} alt='builders' />
                            </div>
                            <div className='details'>
                                <h5>Customizable Designs</h5><br></br>
                                <p>Experience the freedom of customizable designs tailored to match your unique vision and
                                    lifestyle</p>
                            </div>
                        </div>
                        <div className='Team'>
                            <div className='building-img'>
                                <img src={timelyImage} alt='builders' />
                            </div>
                            <div className='details'>
                                <h5>Timely Completion</h5><br></br>
                                <p>We are committed to delivering every project on time, ensuring efficient execution without compromising on quality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='teamwork'>
                        <div className='Team'>
                            <div className='building-img'>
                                <img src={qualityImage} alt="Banner" />
                            </div>
                            <div className='details'>
                                <h5>Quality Construction</h5><br></br>
                                <p>Delivering excellence through superior craftsmanship durable materials, and meticulous attention to detail in every project.</p>
                            </div>
                        </div>
                        <div className='Team'>

                            <div className='building-img'>
                                <img src={transparentImage} alt='builders' />
                            </div>
                            <div className='details'>
                                <h5>Transparent Process
                                </h5><br></br>
                                <p>Our transparent process ensures clear communication, no hidden costs, and full visibility at every stage, so you can trust us to deliver exactly
                                    what we promise</p>
                            </div>
                        </div>
                        <div className='Team'>
                            <div className='building-img'>
                                <img src={houseteamImage} alt='builders' />
                            </div>
                            <div className='details'>
                                <h5>In-house team of experts
                                </h5>
                                <br></br>
                                <p>Our in house team of experts ensures every project is executed with precision, expertise, and dedication
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='teamwork'>
                        <img src={whychoose} alt='builders' />
                    </div>
                </div>
                <div className='service'>
                    <h1><span>Services</span> We Provide</h1>
                    <p>We offer a comprehensive range of construction services, including residential
                        and commercial building, renovation, interior design, and project management.
                        Our skilled team ensures high-quality craftsmanship, timely delivery, and
                        cost effective solutions. From concept to completion, we turn your ideas into
                        reality with excellence and reliability.</p>
                </div>
                <div className='service-det'>
                    <div className='service-img'>
                        <img src={consultingImage} alt='builders' />
                        <a href='ConsultingPage'><button>Consulting</button></a>
                    </div>
                    <div className='service-img'>
                        <img src={estimateImage} alt='builders' />
                        <a href='Estimate'><button>Estimate</button></a>
                    </div>
                    <div className='service-img1'>
                        <img src={planningImage} alt='builders' />
                        <a href='Planing'><button>Plan & Design</button></a>
                    </div>
                    <div className='service-img2'>
                        <img src={constructionImage} alt='builders' />
                        <a href='Construction'><button>Construction</button></a>
                    </div>

                    <div className='service-img'>
                        <img src={FloorImage} alt='builders' />
                        <a href='Flooring'><button>Flooring work</button></a>
                    </div>
                    <div className='service-img'>
                        <img src={paintingImage} alt='builders' />
                        <a href='Painting'><button>Painting work</button></a>
                    </div>
                </div>
                <div className='viewbutton'>
                    <a href='services'><button className='view'>View More</button></a>
                </div>
                <div className='client-reviews-det'>
                    <h1>Our <span>Client</span> Reviews</h1>
                    <div className='client-details'>


                        <div className='client-review-img'>
                            <img src={clientRieview} alt='rieview' />
                            <div className='client-review'>
                                <div className='profileimg'>
                                    <img src={clientimage} alt='clientimg' />
                                    <h2>Aaron</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel felis ac erat facilisis.</p>
                                <p>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </p>
                            </div>
                        </div>

                        <div className='client-review-img'>

                            <img src={clientReview1} alt='rieview' />
                            <div className='client-review'>

                                <div className='profileimg'>
                                    <img src={clientimage1} alt='clientimg' />
                                    <h2>Adelina</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel felis ac erat facilisis.</p>
                                <p>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </p>
                            </div>
                        </div>

                        <div className='client-review-img'>

                            <img src={clientReview2} alt='rieview' />

                            <div className='client-review'>
                                <div className='profileimg'>
                                    <img src={clientimage2} alt='clientimg' />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lacus nec risus cursus convallis.</p>
                                <p>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>



    );
}

export default HomePage;
