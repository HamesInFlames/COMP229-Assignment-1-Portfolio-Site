// Home.jsx - Main landing page with animated introduction
// This component uses react-spring animations to introduce the user and link to other sections of the site

import { useTrail, useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

export default function Home() {
  // Visibility flag used to trigger animations
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // trigger animations on mount
  }, []);

  // Individual animated elements (image, headings, buttons)
  const items = [
    <img src="/profile.jpg" alt="James Kim" style={styles.profileImg} />,
    <h1 style={styles.heading}>
      Hey, I'm <span style={styles.highlight}>James Kim</span>!
    </h1>,
    <p style={styles.subheading}>Welcome to my corner of the internet!</p>,
    <p style={styles.paragraph}>
      I'm a front-end developer with a passion for design and a knack for building clean,
      responsive, and interactive web experiences.
    </p>,
    <a href="/projects">
      <button style={styles.button}>View My Work →</button>
    </a>,
  ];

  // Trail animation for sequential fade-in of each item
  const trail = useTrail(items.length, {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 170, friction: 18 },
    delay: 200,
  });

  // Spring animation for initial container fade-in
  const greetingIntro = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    delay: 100,
  });

  // Additional spring animation for second section
  const fadeInBottom = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    delay: 800,
  });

  return (
    <div style={styles.pageWrapper}>
      <animated.div id="greeting" style={{ ...styles.container, ...greetingIntro }}>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            {items[index]}
          </animated.div>
        ))}

        <hr style={styles.hr} />

        <animated.div style={{ ...styles.sectionIntro, ...fadeInBottom }}>
          <h2 style={styles.subheading}>Let me show you around 👇</h2>
          <p style={styles.paragraph}>
            Scroll down or explore the navigation above to learn more about who I am, what I’ve built,
            and how we can connect.
          </p>
          <a href="/about">
            <button style={styles.button}>About Me →</button>
          </a>
        </animated.div>
      </animated.div>
    </div>
  );
}

// Inline styling for Home.jsx component
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
  highlight: {
    color: '#4F46E5',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#444',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#666',
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
  },
  hr: {
    margin: '2rem auto',
    width: '40%',
    border: '1px solid #eee',
  },
  sectionIntro: {
    marginTop: '2rem',
    color: '#333',
  },
};
