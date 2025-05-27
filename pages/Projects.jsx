// Projects.jsx - Showcases 3 featured portfolio projects with images and animation
// Uses react-spring animations to sequentially reveal project cards on page load

import React, { useState, useEffect } from 'react';
import { useTrail, useSpring, animated } from '@react-spring/web';

// Data for each project displayed on the page
const projects = [
  {
    title: 'React Portfolio',
    img: '/proj1.png',
    desc: 'Built a dynamic portfolio using React and react-spring for animations.'
  },
  {
    title: 'Task Manager App',
    img: '/proj2.png',
    desc: 'Created a C# task manager app for students to organize school work.'
  },
  {
    title: 'Cafe POS System',
    img: '/proj3.jpg',
    desc: 'Developed a custom POS solution using JavaScript and SQLite for Lumiere Patisserie.'
  }
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setVisible(true);
  }, []);

  // Create card JSX for each project
  const items = projects.map(project => (
    <div style={styles.card}>
      <img src={project.img} alt={project.title} style={styles.img} />
      <h3 style={styles.title}>{project.title}</h3>
      <p style={styles.paragraph}>{project.desc}</p>
    </div>
  ));

  // Animate each card sequentially with react-spring useTrail
  const trail = useTrail(items.length, {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 170, friction: 18 },
    delay: 200,
  });

  // Animate the whole container fade-in
  const fadeInContainer = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    delay: 100,
  });

  return (
    <div style={styles.pageWrapper}>
      <animated.div style={{ ...styles.container, ...fadeInContainer }}>
        <h2 style={styles.heading}>My Projects</h2>
        <div style={styles.grid}>
          {trail.map((style, index) => (
            <animated.div key={index} style={{ ...style, ...styles.cardWrapper }}>
              {items[index]}
            </animated.div>
          ))}
        </div>
      </animated.div>
    </div>
  );
}

// Inline styles for layout and project cards
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
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  cardWrapper: {
    width: '250px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '1rem',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#666',
  }
};
