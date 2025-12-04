import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling



const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });
  const handleSubmit = (event) => {
  event.preventDefault();
  const confirmationMessage = `
  Name: ${formData.name}\n  Email: ${formData.email}\n  Feedback: ${formData.feedback}` + `\n  Rating: ${formData.rating}`;
  const isConfirmed = window.confirm('Please confirm your details:\n' + confirmationMessage);
  if (isConfirmed) {
    console.log('Submitting form data:', formData);
  // Handle form submission logic here
  console.log('Form submitted:', formData);
  setFormData({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });
  alert('Thank you for your feedback!');
  }
};
  const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
    
  });
}
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        /> Rate Us: <br />
        <input
          type="radio"
          name="rating"
          value="1"
          checked={formData.rating === '1'}
          onChange={handleChange}
        />1
        <input
          type="radio"
          name="rating"
          value="2"
          checked={formData.rating === '2'}
          onChange={handleChange}
        />2
        <input
          type="radio"
          name="rating"
          value="3"
          checked={formData.rating === '3'}
          onChange={handleChange}
        />3
        <input
          type="radio"
          name="rating"
          value="4"
          checked={formData.rating === '4'}
          onChange={handleChange}
        />4
        <input
          type="radio"
          name="rating"
          value="5"
          checked={formData.rating === '5'}
          onChange={handleChange}
        />5
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
