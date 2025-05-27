// Contact.jsx - Contact form page with animation and redirect after submission
// This component features a styled input form that animates in using react-spring

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTrail, useSpring, animated } from '@react-spring/web';

export default function Contact() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  
  // Store user input from form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setVisible(true); // Triggers the animations on load
  }, []);

  // Update state when form fields change
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Alert and redirect on form submit
  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent! Redirecting to Home...');
    navigate('/');
  };

  // Define animated input fields
  const formItems = [
    <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required style={styles.input} />,
    <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required style={styles.input} />,
    <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required style={styles.input} />,
    <input type="tel" name="phone" placeholder="Contact Number" onChange={handleChange} style={styles.input} />,
    <textarea name="message" placeholder="Your Message" rows={5} onChange={handleChange} required style={styles.textarea} />,
    <button type="submit" style={styles.button}>Send Message</button>
  ];

  // Trail animation to animate form fields one after the other
  const trail = useTrail(formItems.length, {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 170, friction: 18 },
    delay: 300,
  });

  // Fade-in animation for the container box
  const fadeInContainer = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    delay: 100,
  });

  return (
    <div style={styles.pageWrapper}>
      <animated.div style={{ ...styles.container, ...fadeInContainer }}>
        <h2 style={styles.heading}>Contact Me</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {trail.map((style, i) => (
            <animated.div key={i} style={style}>
              {formItems[i]}
            </animated.div>
          ))}
        </form>
      </animated.div>
    </div>
  );
}

// Inline styles for the contact form component
const styles = {
  pageWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  container: {
    maxWidth: '960px',
    width: '100%',
    margin: '0 auto',
    padding: '4rem 1.5rem',
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    color: '#111',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
  },
  heading: {
    fontSize: '2.75rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    color: '#111',
    backgroundColor: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
    color: '#111',
    backgroundColor: '#fff',
  },
  button: {
    padding: '12px 28px',
    fontSize: '1rem',
    backgroundColor: '#4F46E5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
