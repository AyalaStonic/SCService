import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    contactMethod: "Call",
    address: "",
    city: "",
    propertyType: "Apartment",
    squareFootage: 1500,
    bedrooms: "",
    bathrooms: "",
    frequency: "One-Time",
    customFrequency: "",
    condition: "Light Cleaning Needed",
    specialAreas: "",
    walkthroughDate: "",
    walkthroughTime: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      contactMethod: "Call",
      address: "",
      city: "",
      propertyType: "Apartment",
      squareFootage: 1500,
      bedrooms: "",
      bathrooms: "",
      frequency: "One-Time",
      customFrequency: "",
      condition: "Light Cleaning Needed",
      specialAreas: "",
      walkthroughDate: "",
      walkthroughTime: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c64f9mh",
        "template_4cnhmcl",
        formData,
        "Y2gYYQRLy3S7DgvwL"
      )
      .then(() => {
        return emailjs.send(
          "service_c64f9mh",
          "template_g4qhkyi",
          formData,
          "Y2gYYQRLy3S7DgvwL"
        );
      })
      .then(() => {
        setStatus("Request sent successfully!");
        resetForm();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Error sending request. Please try again.");
      });
  };

  return (
    <section className="quote-form" id="quote">
      <h2>Schedule a Free Cleaning Consultation</h2>

      <p className="quote-subtext">
        Tell us a bit about your space and cleaning needs. We’ll schedule a complimentary
        on-site walkthrough to provide a customized cleaning plan and accurate pricing.
      </p>

      <p className="service-area">
        Currently operating in Florida only.
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

        <div className="phone-input">
          <span className="flag">🇺🇸 +1</span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Preferred Method of Contact</label>
        <select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
        >
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
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
        >
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
        <select
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
        >
          <option>One-Time</option>
          <option>Weekly</option>
          <option>Bi-Weekly</option>
          <option>Monthly</option>
          <option>Custom Schedule</option>
        </select>

        {formData.frequency === "Custom Schedule" && (
          <input
            type="text"
            name="customFrequency"
            placeholder="Please describe your preferred schedule"
            value={formData.customFrequency}
            onChange={handleChange}
          />
        )}

        <div className="square-footage">
          <label>Approximate Square Footage</label>
          <input
            type="range"
            name="squareFootage"
            min="500"
            max="6000"
            step="100"
            value={formData.squareFootage}
            onChange={handleChange}
          />
         <div className="sqft-display">
  {formData.squareFootage >= 3000
    ? "3000+ sq ft"
    : `${formData.squareFootage} sq ft`}
</div>

          <small>If unsure, provide your best estimate.</small>
        </div>

        <label>Overall Condition of the Space</label>
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
        >
          <option>Light Cleaning Needed</option>
          <option>Moderate Cleaning Needed</option>
          <option>Deep Cleaning Required</option>
        </select>

        <textarea
          name="specialAreas"
          placeholder="Please share any areas needing special attention, additional details about your space, or any questions you may have. (optional)"
          rows="4"
          value={formData.specialAreas}
          onChange={handleChange}
        ></textarea>

        <div className="walkthrough-box">
          <h3>Free On-Site Walkthrough</h3>

          <div className="walkthrough-fields">
            <input
              type="date"
              name="walkthroughDate"
              value={formData.walkthroughDate}
              onChange={handleChange}
            />

          <select
  name="walkthroughTime"
  value={formData.walkthroughTime}
  onChange={handleChange}
>
  <option value="">Select Preferred Time</option>

  {Array.from({ length: 19 }, (_, i) => i + 6).flatMap((hour) =>
    ["00", "30"].map((minute) => {
      if (hour === 23 && minute === "30") {
        const hour12 = hour % 12 || 12;
        return (
          <option key={`${hour}:${minute}`}>
            {hour12}:{minute} PM
          </option>
        );
      }

      if (hour < 23) {
        const hour12 = hour % 12 || 12;
        const ampm = hour < 12 ? "AM" : "PM";

        return (
          <option key={`${hour}:${minute}`}>
            {hour12}:{minute} {ampm}
          </option>
        );
      }

      return null;
    })
  )}
</select>

          </div>
        </div>

        <p className="walkthrough-note">
          * Final pricing is provided after the on-site walkthrough.
        </p>

        <button type="submit" className="cta">
          Schedule My Free Walkthrough
        </button>
      </form>

      {status && (
        <div
          className={`form-status ${
            status.includes("Error") ? "error" : "success"
          }`}
        >
          {status}
        </div>
      )}
    </section>
  );
};

export default Contact;
