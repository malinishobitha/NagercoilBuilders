import React, { useState } from "react";
import EnquiryImage from "./images/Quick enquiry Img.png";
import "./css/Enquiry.css";

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    services: "Consulting",
    packageType: "Basic Package",
    details: ""
  });

  const [message, setMessage] = useState("");

  const serviceOptions = [
    "Consulting", "Estimate", "Plan & Design", "Construction",
    "Flooring Work", "Painting Work", "3D-Elevation Design",
    "Electric Work", "Interior Work", "Renovation Work",
    "Interior Design", "Carpentry Work"
  ];

  const packageOptions = ["Basic Package", "Standard Package", "Premium Package"];

  // Email validation: only accepts emails that end exactly with @gmail.com
  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  };

  // Handle input change with validation updates
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (!/^[A-Za-z ]*$/.test(value)) {
        return; // Ignore invalid characters in name
      }
    }

    if (name === "mobile") {
      if (!/^\d*$/.test(value)) {
        return; // Ignore non-numeric characters in mobile
      }
    }

    if (name === "email") {
      // Always update email state so the user can type gradually
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
      // If email is not empty and not valid, show error; else clear error.
      if (value !== "" && !validateEmail(value)) {
        setMessage("❌ Please enter a valid email in the format: example@gmail.com");
      } else {
        setMessage("");
      }
      return; // Return early since we've already updated state for email.
    }

    // For other fields, update state normally.
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submit with email check
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setMessage("❌ Please enter a valid email in the format: example@gmail.com");
      return;
    }

    try {
      const response = await fetch("https://www.nagercoilbuilders.com/Enquiryform/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Enquiry Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          services: "Consulting",
          packageType: "Basic Package",
          details: ""
        });
      } else {
        setMessage("❌ Error: " + data.error);
      }
    } catch (error) {
      setMessage("❌ Something went wrong! Please try again.");
      console.error("Error:", error);
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="container-fluid">
      <div className="enquiry-container">
        <div className="Enquiry">
          <h1>Do You Have <span>Questions?</span></h1>
          <p>For more information, inquire about a future project!</p>
          <img src={EnquiryImage} alt="Enquiry" />
        </div>
        <div className="Enquiry-form">
          <h1>Quick Enquiry</h1>

          {message && <div className="success-message">{message}</div>}

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email ID" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="mobile" 
              placeholder="Mobile Number" 
              value={formData.mobile} 
              onChange={handleChange} 
              inputMode="numeric" 
              maxLength="10" 
              required 
            />
            <select name="services" value={formData.services} onChange={handleChange} required>
              {serviceOptions.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <select name="packageType" value={formData.packageType} onChange={handleChange} required>
              {packageOptions.map((pkg, index) => (
                <option key={index} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
            <textarea 
              name="details" 
              placeholder="Enter Your Details" 
              value={formData.details} 
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
