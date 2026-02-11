import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    contactMethod: "Call",
    address: "",
    city: "",
    propertyType: "Apartment",
    squareFootage: "",
    bedrooms: "",
    bathrooms: "",
    frequency: "One-Time",
    condition: "Light",
    lastCleaning: "",
    specialAreas: "",
    walkthroughDate: "",
    walkthroughTime: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("QUOTE SUBMITTED:", formData);

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setStatus(result.status || "Request sent successfully!");

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        contactMethod: "Call",
        address: "",
        city: "",
        propertyType: "Apartment",
        squareFootage: "",
        bedrooms: "",
        bathrooms: "",
        frequency: "One-Time",
        condition: "Light",
        lastCleaning: "",
        specialAreas: "",
        walkthroughDate: "",
        walkthroughTime: ""
      });
    } catch (error) {
      console.error("FRONTEND ERROR:", error);
      setStatus("Error sending request.");
    }
  };

  return (
    <section className="quote-form" id="quote">
      <h2>Schedule a Free Cleaning Consultation</h2>


     <p className="quote-subtext">
  Tell us a bit about your space and cleaning needs. We’ll schedule a complimentary
  on-site walkthrough to provide a customized cleaning plan and accurate pricing.
</p>


      <form onSubmit={handleSubmit}>
        <h3>Client Information</h3>

       <input
  type="text"
  name="fullName"
  placeholder="Name or Company Name"
  value={formData.fullName}
  onChange={handleChange}
  required
/>


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Preferred Method of Contact</label>
        <select name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
          <option>Call</option>
          <option>Text</option>
          <option>Email</option>
        </select>

        <h3>Location & Property Details</h3>

        <input
          type="text"
          name="address"
          placeholder="Service Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Property Type</label>
        <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
          <option>Apartment</option>
          <option>Condo</option>
          <option>Single-Family Home</option>
          <option>Office</option>
          <option>Retail Space</option>
        </select>

      {!["Office", "Retail Space"].includes(formData.propertyType) && (
  <>
    <input
      type="number"
      name="bedrooms"
      placeholder="Number of Bedrooms"
      value={formData.bedrooms}
      onChange={handleChange}
    />

    <input
      type="number"
      name="bathrooms"
      placeholder="Number of Bathrooms"
      value={formData.bathrooms}
      onChange={handleChange}
    />
  </>
)}


        <label>Service Frequency</label>
        <select name="frequency" value={formData.frequency} onChange={handleChange}>
          <option>One-Time</option>
          <option>Weekly</option>
          <option>Bi-Weekly</option>
          <option>Monthly</option>
        </select>

        <h3>Cleaning Scope & Condition</h3>

        <label>Current Condition</label>
        <select name="condition" value={formData.condition} onChange={handleChange}>
          <option>Light</option>
          <option>Moderate</option>
          <option>Heavy</option>
        </select>

        <textarea
          name="specialAreas"
          placeholder="Are there any areas needing special attention? (optional)"
          rows="4"
          value={formData.specialAreas}
          onChange={handleChange}
        ></textarea>

        {/* WALKTHROUGH SECTION */}
        <div className="walkthrough-box">
          <h3>Free On-Site Walkthrough</h3>
          <p>
            Select a preferred date and time for your complimentary walkthrough.
            We’ll confirm availability with you shortly.
          </p>

          <div className="walkthrough-fields">
            <input
              type="date"
              name="walkthroughDate"
              value={formData.walkthroughDate}
              onChange={handleChange}
            />

            <input
              type="time"
              name="walkthroughTime"
              value={formData.walkthroughTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <p className="walkthrough-note">
          * Final pricing is provided after the on-site walkthrough. If you have any questions, we’re always happy to help, just give us a call.
        </p>

        <button type="submit" className="cta">
          Schedule My Free Walkthrough

        </button>
      </form>

      <p>{status}</p>
    </section>
  );
};

export default Contact;
