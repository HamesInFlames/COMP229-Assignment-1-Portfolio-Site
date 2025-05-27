// Layout.jsx - Defines consistent page layout with navigation bar and main content area
// Used as a wrapper for all pages in the application to maintain a uniform header/navigation

import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.navbar}>
          {/* Custom logo placed on the left of the navigation bar */}
          <Link to="/" style={styles.logo}>
            <img src="/logo.png" alt="James Kim Logo" style={styles.logoImg} />
          </Link>

          {/* Navigation links to other site sections */}
          <nav style={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      {/* Main content container for routed components */}
      <main style={styles.main}>{children}</main>
    </>
  );
}

// Inline styles for layout and navigation bar
const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
    padding: '0.5rem 1.5rem',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  logoImg: {
    height: '85px',
    objectFit: 'contain',
    display: 'block',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '960px',
    margin: '0 auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    height: '60px',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    fontSize: '1rem',
  },
  main: {
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    paddingTop: '2rem',
  },
};
