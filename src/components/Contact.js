import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT CLICKED:", formData); // 👈 DEBUG

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log("RAW RESPONSE:", response); // 👈 DEBUG

      const result = await response.json();
      console.log("SERVER RESPONSE:", result); // 👈 DEBUG

      setStatus(result.status);
      setFormData({ name: '', email: '', number: '', message: '' });

    } catch (error) {
      console.error("FRONTEND ERROR:", error); // 👈 DEBUG
      setStatus('Error sending message.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
        /><br />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br />

        <button type="submit">Send</button>
      </form>

      <p>{status}</p>
    </div>
  );
};

export default Contact;
