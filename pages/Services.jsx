// Services.jsx - Displays a list of services provided with animated appearance
// Each service appears sequentially using react-spring animations

import React, { useState, useEffect } from 'react';
import { useTrail, useSpring, animated } from '@react-spring/web';

// List of service offerings
const services = [
  'Web Development',
  'UI/UX Design',
  'Mobile App Prototyping',
  'React and JavaScript Training'
];

export default function Services() {
  const [visible, setVisible] = useState(false);

  // Trigger animations once the component is mounted
  useEffect(() => {
    setVisible(true);
  }, []);

  // Animate each list item sequentially with useTrail
  const trail = useTrail(services.length, {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 170, friction: 18 },
    delay: 300,
  });

  // Fade in the container itself using useSpring
  const fadeInContainer = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    delay: 100,
  });

  return (
    <div style={styles.pageWrapper}>
      <animated.div style={{ ...styles.container, ...fadeInContainer }}>
        <h2 style={styles.heading}>Services I Offer</h2>
        <ul style={styles.list}>
          {trail.map((style, i) => (
            <animated.li key={i} style={{ ...style, ...styles.item }}>
              {services[i]}
            </animated.li>
          ))}
        </ul>
      </animated.div>
    </div>
  );
}

// Inline styles for service list layout and animations
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
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    fontSize: '1.2rem',
    margin: '0.75rem 0',
    backgroundColor: '#e0e7ff',
    color: '#111',
    padding: '1rem',
    borderRadius: '6px',
  },
};
