// About.jsx - Profile page that introduces the site owner and links to their resume
// Uses react-spring animations to display name, image, intro text, and a download button for the resume

import React, { useState, useEffect } from 'react';
import { useTrail, useSpring, animated } from '@react-spring/web';

export default function About() {
  // Triggers animations when component is mounted
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Define items to be animated (title, image, paragraph, and button)
  const items = [
    <h2 style={styles.heading}>About Me</h2>,
    <img src="/profile.jpg" alt="James Kim" style={styles.profileImg} />,
    <p style={styles.paragraph}>
      My name is James Kim or Seonghyun Kim. I'm a passionate front-end developer with a strong interest in clean UI design and building interactive user experiences.
      I’m currently pursuing an Advanced Diploma in AI Software Engineering at Centennial College.
    </p>,
    <a href="/resume.pdf" download>
      <button style={styles.button}>Download Resume</button>
    </a>
  ];

  // Trail animation to display each item sequentially
  const trail = useTrail(items.length, {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 170, friction: 18 },
    delay: 200,
  });

  // Fade-in animation for the container
  const fadeInContainer = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    delay: 100,
  });

  return (
    <div style={styles.pageWrapper}>
      <animated.div style={{ ...styles.container, ...fadeInContainer }}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            {items[index]}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}

// Inline styles for About.jsx component
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
  profileImg: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '2rem',
    marginTop: '0.5rem',
    border: '3px solid #4F46E5',
  },
  heading: {
    fontSize: '2.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#333',
    marginBottom: '2rem',
  },
  button: {
    padding: '12px 28px',
    fontSize: '1rem',
    backgroundColor: '#4F46E5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};
