import React from "react";
import EnquiryImage from './images/Quick enquiry Img.png';
import './css/Enquiry.css';
function EnquiryPage() {
    return (
        <div className="container-Fluid">
            <div className="enquiry-container">
                <div className="Enquiry">
                    <h1>Do You Have <span>Questions?</span></h1>
                    <br></br>
                    <p>Serving the greater Seattle area beyond. For more information on our services, or to inquire about a future project, give us a call!</p>
                    <img src={EnquiryImage} alt="Enquiry-image" />
                </div>
                <div className="Enquiry-form">
                    <h1>Quick Enquiry</h1>
                    <form>
                        <div>
                            <label htmlFor="name"></label>
                            <input type="text" id="name" placeholder="Full Name" />
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="Email ID" />
                        </div>
                        <div>
                            <label htmlFor="mobile"></label>
                            <input type="tel" id="mobile" placeholder="Mobile Number" />
                        </div>
                        <div>
                            <label htmlFor="services"></label>
                            <select id="services">
                                <option value="cons">Consulting</option>
                                <option value="Estimate">Estimate</option>
                                <option value="Plan">Plan & Design</option>
                                <option value="Construct">Construction</option>
                                <option value="Floor">Flooring work</option>
                                <option value="Painting">Plainting Work</option>
                                <option value="Elevation">3D-Elevation Design</option>
                                <option value="Electric">Electric Work</option>
                                <option value="Interior">Interior Work</option>
                                <option value="Renovation">Renovation Work</option>
                                <option value="InteriorDesign">Interior Design</option>
                                <option value="Carpentry">Carpentry Work</option>

                            </select>
                        </div>
                        <div>
                            <label htmlFor="details"></label>
                            <textarea id="details" placeholder="Enter Your Details"></textarea>
                        </div>
                        <div className="checkbox-button">
                            <label htmlFor="robot">
                                <input type="checkbox" id="robot" /> I'm not a Robot
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPage;
